var UserSchema = new Schema({
    email: String,
    password: String
  });
  
  var User = mongoose.model('User', UserSchema);

  module.exports = User;