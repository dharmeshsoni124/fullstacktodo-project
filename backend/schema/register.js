const mongoose=require("mongoose");

const signupSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    confirmpassword:{
        type:String,
        require:true,
        minlength:6
    }
});

const registerModal=mongoose.model("register",signupSchema);

module.exports=registerModal;