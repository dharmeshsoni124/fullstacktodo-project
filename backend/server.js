const express =require("express");
const app=express();
const mongoose=require("mongoose");
const registerModal=require("./schema/register")
const {checkExistingUser}=require("./utility");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto=require("crypto");
require('dotenv').config();
const salt=10;

const secretKey=crypto.randomBytes(64).toString("hex");


const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            
    optionSuccessStatus: 200,
}

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:false}));


app.listen(process.env.PORT || 3010, (err)=> {
    if(!err) {
        console.log("Server started at port 3010")
    } else {
        console.log(err);
    }
});

mongoose.connect("mongodb+srv://dharmesh:dharmesh124@instaclone1.wupz9sm.mongodb.net/fullstack?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to db");
  },
  (err) => {
    console.log(err);
  }
);

app.get("/",(req,res)=>{
    res.send("hello");
})

app.post("/register", async (req, res) => {
    if (await checkExistingUser (req.body.username)) {
        res.status(200).send("user already exist")
    }
     else 
     {
        bcrypt.genSalt(salt).then((saltHash)=>{
            bcrypt.hash(req.body.password,saltHash).then((passwordHash)=>{
                registerModal.create({
                    username:req.body.username,
                    password:passwordHash
                }).then(()=>{
                    res.status(200).send(`${req.body.username} user registered`)
                }).catch((err)=>{
                    res.status(400).send(err.message);
                })
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)

    })
}

});


app.post("/signin", (req, res) => {
    registerModal.find({ username: req.body.username }).then((userData) => {

        if (userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val) => {
                if (val) {
                    const authToken = jwt.sign(userData[0].username, secretKey);
                    console.log(1)
                    res.status(200).send({ authToken });
                } else {
                    res.status(400).send("invalid password please enter correct password")
                }
            })
        } else  {
            res.status(400).send("user not exist please register")
        }
    })
})