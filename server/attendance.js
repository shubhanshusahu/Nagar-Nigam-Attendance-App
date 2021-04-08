const mongoose = require('mongoose')

const Attendance=new mongoose.Schema({

    Name:String,
    EmployeeId:String,
    Photo:String,
    Latitude:Number,
    Longitude:Number,
    Date:String,
})
const Note= mongoose.model("attendance",Attendance);

module.exports=Note;
