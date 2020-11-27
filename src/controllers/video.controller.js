const slug = require("slug");
const videomodel=require("../models/video.model");

class VideoController{

    

    //GET/detail/:slug
    detail(req,res){
        videomodel.findOne({slug:req.params.slug},function(err,data){
            if(err){
                console.log("Error:"+err)
            }else{
                res.render("detail",{ds:data})
            }
        })
    };

    //DELETE/delete/:id
    destroy(req,res){
        videomodel.deleteOne({_id:req.params.id},function(err){
            if(err){
                console.log("Error:"+err)
            }else{
                res.redirect("back")
            }
        })
    }
    //GET/edit/:id
    edit(req,res){
        videomodel.findById(req.params.id,function(err,data){
            if(err){
                console.log("Error:"+err)
            }else{
                res.render("edit",{ds:data})
            }
        })
      
    };

    //POST/edit
    postedit(req,res){
        videomodel.updateOne({_id:req.params.id},req.body,function(err){
            if(err){
                console.log("Error:"+err)
            }else{
                res.redirect("/list")
            }
        })
        
    };

    //GET/list
    list(req,res){
        videomodel.find(function(err,data){
            if(err){
                console.log("Error:"+err)
            }else{
                res.render("list",{ds:data})
            }
        })
    };

    //GET/create
    create(req,res){
        res.render("create")
    };

    //POST/create
    postcreate(req,res){
        const data = req.body;
        data.image=`https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
        const a = new videomodel(data);
        a.save(function(err){
            if(err){
                console.log("Error:"+err);
            }else{
                res.redirect("/")
            }
        })
    };

    //GET/
    home(req,res){
        videomodel.find(function(err,data){
            if(err){
                console.log("Error:"+err)
            }else{
                res.render("home",{ds:data})
            }
        })
        
    };
};

module.exports = new VideoController;