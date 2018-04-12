const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    encrypt : function (password, callback){
        bcrypt.hash(password, saltRounds)
        .then( hash =>{
            
        } )
        .catch( err => {
            
        });;
    },

    decrypt: function () {
        bcrypt.compare(myPlaintextPassword, hash)
        .then( res =>{

        } )
        .catch( err => {

        });
    }
    
}
