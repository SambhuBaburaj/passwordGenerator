const { default: mongoose } = require("mongoose");
const { PasswordData } = require("../Model/SavedPassword");
const { UserData } = require("../Model/UserModel");
mongoose
const  AddPassword=(req,res)=>
{
console.log(req.body);
console.log(  req.LoggeDInUser);
PasswordData({
User:req.LoggeDInUser._id,
Name:req.body.Name,
Password:req.body.Password
}).save()
res.json(true)
}

const Getpassword=async(req,res)=>
{



   await  PasswordData.find({User:new mongoose.Types.ObjectId( req.LoggeDInUser._id)}).then(data=>
        {
         
            res.json(data)
        })


}
const DeletePass=async(req,res)=>
{
    
    console.log(new mongoose.Types.ObjectId(req.query.Passid));
  await   PasswordData.findByIdAndDelete(new mongoose.Types.ObjectId(req.query.Passid)).then(data=>
    {
        res.json(true)
    })

}



module.exports={AddPassword,Getpassword,DeletePass}