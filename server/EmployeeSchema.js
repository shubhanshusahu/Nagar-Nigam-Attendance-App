const mongoose = require('mongoose')

const Employee=new mongoose.Schema({

    Name:String,
    Password:String,
    EmployeeId:String,
    Mobile:String,
    Under:String,
    Pfp:String
})
const Note= mongoose.model("emp",Employee);

module.exports=Note;