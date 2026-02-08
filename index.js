import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/comment", async (req,res)=>{
 const {name,comment}=req.body;

 await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
    chat_id:process.env.CHAT_ID,
    text:`New Comment 🚀\nName:${name}\nComment:${comment}`
  })
 });

 res.json({success:true});
});

app.listen(3000);