const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Bye world");
    
})
app.listen(3000,()=>{
    console.log("Server is running in port 3000");
});
