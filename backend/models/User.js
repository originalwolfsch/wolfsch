const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: 'The name is required'} 
});


module.exports = mongoose.model('User', UserSchema);
