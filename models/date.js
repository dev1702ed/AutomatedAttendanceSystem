const mongoose = require('mongoose');

const {Schema } = mongoose;

const dateSchema = new Schema({
    
    workingdays: [String],
    nofworkingdays: Number
    // image: String
})

const date = mongoose.model('date', dateSchema);
module.exports = date;