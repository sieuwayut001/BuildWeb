const routerVideo=require("./video.router");


function router(app){
   app.use("/",routerVideo);
};

module.exports=router;