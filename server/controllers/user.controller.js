let User = require('../models/user.model');
let Encryption = require('../helper/encryption');

module.exports = {
    register: function (req, res) {
        bcrypt.hash(req.body.password, saltRounds)
        .then( hash =>{
            let new_user = {
                name = req.body.name,
                password = hash
            }

            User.create(new_user)
            .then( ()=> {
                res.status(200).json({
                    message: 'Success register'
                })
             });
        } )
        .catch( err => {
            
        });
    
    }
}