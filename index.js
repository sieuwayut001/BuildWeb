const express=require("express");
const app=express();
const port=process.env.PORT||3000;
const mongoose=require("mongoose");

const router=require("./src/routers/index.router");

app.set("view engine","ejs");
app.set("View","/views");

app.listen(port,function(err){
    if(err){
        console.log("Listening port error:"+err)
    }else{
        console.log(`Listening port sucess:${port}`)
    }
});

//mongoose
mongoose.connect('mongodb+srv://liemnguyen:200396Ab@cluster0.ajoks.mongodb.net/VideoWeb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true},function(err){
    if(err){
        console.log("Connect mongoose error:"+err)
    }else{
        console.log("Connect mongoose sucess")
    }
});

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


//router
router(app);



