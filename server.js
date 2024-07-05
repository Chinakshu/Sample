const errorHandler = require("./middlewares/errorHandler");
const express = require("express");
const app = express();
const port = 5000;
/*
 app.get("/api/notes",(req,res)=>{
     res.status(200).json({message:"get all notes"});

 });

 app.get("/api/notes/:id",(req,res)=>{
     res.status(200).json({message: `${req.params.id}`});

 });

 app.post("/api/notes",(req,res)=>{
     res.status(200).json({message:"post all notes"});
 });
 app.put("/api/notes",(req,res)=>{
     res.status(200).json({message:"update all notes"});
 });

 app.delete("/api/notes",(req,res)=>{
     res.status(200).json({message:"delete notes"});
 });

 app.listen(port,()=>{
     console.log(`Server running on port ${port}`);
});*/

app.use(express.json());
app.use("/api/notes", require("./routes/noteroutes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});