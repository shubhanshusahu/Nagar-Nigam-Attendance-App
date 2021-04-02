const mongoose = require('mongoose')

const PublicSchema = new mongoose.Schema({

    Name:String,
    Dateofbirth:String,
    MobileNumber:String,
    Password:String,

    
})
const Note= mongoose.model("Public",PublicSchema);

module.exports=Note;