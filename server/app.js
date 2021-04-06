const express=require('express')
const app= express()
const bodyParser= require ('body-parser')
const mongoose=require('mongoose')



// app.use(cors())
app.use(bodyParser.json({
    limit:'50mb'
}));
app.use(bodyParser.urlencoded({
    limit:'50mb',
    parameterLimit:100000,
    extended:true
}));
 app.use(express.json({
     limit:'50mb'
 }));
 app.use(express.urlencoded({limit:'50mb'}));
let port = process.env.PORT || 3000
require('./EmployeeSchema')
require('./public')
const emp= mongoose.model("emp")
const User= mongoose.model("Public")
const mongoUri="mongodb+srv://rishi:12345@cluster0.00f3y.mongodb.net/OnlineAttendance";
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=> {
    console.log("connected to mongo!!!")
})

app.get('/',(req,res)=>{
    emp.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})
app.get('/public',(req,res)=>{
    User.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/emp',(req,res)=>{
    const adminuser= new emp({
        Name:"shanshu sahu",
        Password:"su sahu",
        EmployeeId:"shubhanshu sahu",
        Under:null
    })
    adminuser.save()
    res.send("success")
})
app.post('/product',(req,res)=>{
    AddProduct.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/productReorder',(req,res)=>{
   AddProduct.find({})
    .then(data1=>{
        res.send(data1)
    }).catch(err=>{
        console.log(err)
    })
    
})

app.post('/send-data',(req,res)=> {


    emp.findOne({'EmployeeId':req.body.EmployeeId})
    .then(data=>{
        
        if(data){
            res.send({'success':true})
        }
        else
        {res.send({'success':false})
    const adminuser= new emp({
        Name:req.body.Name,
        Password:req.body.Password,
        EmployeeId:req.body.EmployeeId,
        Mobile:req.body.Mobile,
        Under:req.body.Under,
        Pfp:req.body.Pfp

    })
    adminuser.save()
    .then(data=>{
       
        
    }).catch(err=>{
        console.log(err)
    })

      }
})
})


app.post('/searchProduct',(req,res)=> {

    
    var Barcode=req.body.Barcode;
    
AddProduct.findOne({'Barcode':Barcode} )
 .then(data=>{
    
     if(data){
         res.send({'success':true,'pname':data.ProductName,'quan':data.Quantity,'price':data.Price,'reorder':data.ReorderQuantity})
     }
     else
     {
         res.send({'success':false ,'message':'Employee not found!'})
     }
     
 }).catch(err=>{
     console.log(err)
 })

})


app.post('/login',(req,res)=> {

       var Password=req.body.Password;
       var EmployeeId=req.body.EmployeeId;
       
   emp.findOne({$and: [{'EmployeeId':EmployeeId} , {'Password':Password} ] } )
    .then(data=>{
       
        if(data){
            res.send({'success':true,'Name':data.Name,'empid':data.EmployeeId,'role':data.Role,'Pfp':data.Pfp})
        }
        else
        {
            res.send({'success':false ,'message':'Employee not found!'})
        }
        
    }).catch(err=>{
        console.log(err)
    })

})


app.post('/AddProduct',(req,res)=> {
    console.log(req.body)
    AddProduct.findOne({'Barcode':req.body.Barcode})
    .then(data=>{
        console.log(data)
        if(data){
            res.send({'success':true})
        }
        else
        {res.send({'success':false})
    const addpro= new AddProduct({
        Barcode:req.body.Barcode,
        ProductName:req.body.ProductName,
        Quantity:req.body.Quantity,
        ReorderQuantity:req.body.ReorderQuantity,
        Price:req.body.Price

    })  
    addpro.save()
    .then(data=>{
        console.log(data)
        
    }).catch(err=>{
        console.log(err)
    })
}
})

    
})

app.post('/search',(req,res)=>{
    console.log(req.body)
    //const ProductName=req.body.ProductName;
AddProduct.find({'ProductName':{$regex:req.body.ProductName,$options:"i"},})
   .then(data=>{
    if(data){
        res.send(data);

        
    //res.end();
    }
    else{
                
       res.send({'message':'s'})
    
    }
    })
    .catch(err=>{
        console.log(err)
    })

})
app.post('/UpdateProduct',(req,res)=> {
    console.log(req.body)
    const filter={Barcode:req.body.Barcode};
const update={
    Barcode:req.body.Barcode,
        ProductName:req.body.ProductName,
        Quantity:req.body.Quantity,
        ReorderQuantity:req.body.ReorderQuantity,
        Price:req.body.Price
};
AddProduct.findOne({'Barcode':req.body.Barcode})
.then(data=>{
    console.log(data)
    if(!data){
        res.send({'success':false})
    }
    else
    {res.send({'success':true})
    AddProduct.findOneAndUpdate(filter,update)  

    .then(data=>{
        console.log(data)
        
    }).catch(err=>{
        console.log(err)
    })
}
})
    
})


app.post('/delete',(req,res)=> {
AddProduct.findOneAndDelete({'Barcode':req.body.Barcode})
.then(data=>{

    console.log(data)
    res.send("Deleted")
})
.catch(err=>{
    console.log(err)
})



})
app.post('/sign-in',(req,res)=> {
   
       var MobileNumber=req.body.MobileNumber;    
       var  Password=req.body.Password;   

        User.findOne({$and:[{'MobileNumber':MobileNumber},{'Password':Password}]})
        .then(data=>{
            console.log(data)
            if(data){
             
                res.send({'success':true,'Name':data.Name,'MobileNumber':data.MobileNumber})

            }
            else{
                
                res.send({'success':false,'message':'Customer not found, Check your login credentials'})
                
    
            }
    
    }).catch(err=>{
        console.log(err)
    })

  
})

app.post('/signup-data',(req,res)=> {
    User.findOne({'MobileNumber':req.body.MobileNumber})
    .then(data=>{
        
        if(data){
    
            res.send({'success':true})

        }
        else{
            res.send({'success':false})
    const user= new User({
        Name:req.body.Name,
        Dateofbirth:req.body.Dateofbirth,
        MobileNumber:req.body.MobileNumber,
        Password:req.body.Password
    })  
    user.save()
    .then(data=>{
       
        
    }).catch(err=>{
        console.log(err)
    })
 } 
})

})
app.post('/forgotpassword',(req,res)=> {
    console.log(req.body)
   
User.findOne({$and:[{'MobileNumber':req.body.MobileNumber},{'Dateofbirth':req.body.Dateofbirth} ] })
.then((data)=>{
    console.log(data)
    if(data==null){
        res.send({'success':false}) 
    }
    else
    {
        res.send({'success':true })
   
}
})
    
})
app.post('/passUpdate',(req,res)=>{
    const filter={MobileNumber:req.body.MobileNumber};
    const update={
        Password:req.body.Password, 
    };
    User.findOneAndUpdate(filter,update)  

    .then(data=>{
        console.log(data)
        
    }).catch(err=>{
        console.log(err)
    })


})
app.post('/update',(req,res)=> {
    AdminUser.findByIdAndUpdate(req.body.id,{
        Name:req.body.name,
        Password:req.body.password,
        EmployeeId:req.body.employeeid,
        Role:req.body.role

    })
    .then(data=>{
    
        console.log(data)
        res.send("Updated!")
    })
    .catch(err=>{
        console.log(err)
    })
    })
    
app.listen(port,()=>{
    console.log("server running on "+ port)
})