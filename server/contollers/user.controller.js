let User = require('../models/user.model');
let Encryption = require('../helper/encryption');

module.exports = {
    register: function (req, res) {
        let new_user = 
        {
            name: req.body.name,
            password: Encryption
        }
    }
}