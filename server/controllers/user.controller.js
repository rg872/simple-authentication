let User = require('../models/user.model');
const saltRounds = 10;

module.exports = {
    register: function (req, res) {
        let new_user = {
            email :req.body.email,
            password : req.body.password
        }

        User.create(new_user)
        .then( ()=> {
            res.status(200).json({
                message: 'Success register'
            })
         })
         .catch( (err)=>{
            res.status(400).json({
                message: 'fail register',
                error: err
            })
         });
    
    },

    login: function (req, res){
        let logged_user = {
            email :req.body.email,
            password : req.body.password
        }

        User.findOne(logged_user)
        .then( (user)=> {
            if(user){
                res.status(200).json({
                    message: 'success login',
                    user: user
                })
            } else {
                res.status(400).json({
                    message: 'pass/email not found',
                    user: user
                }) 
            }
            
         })
         .catch( (err)=>{
            res.status(500).json({
                message: 'server error while login',
                error: err
            })
         });
    }
}