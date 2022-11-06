const registerModal=require("./schema/register.js");

const bcrypt = require("bcryptjs");
const checkExistingUser = async (username) => {
    let existinguser = false
    await registerModal.find({ username: username }).then((userData) => {
        if (userData.length) {
            existinguser = true
        }
    })
    return existinguser
};

module.exports = { checkExistingUser}