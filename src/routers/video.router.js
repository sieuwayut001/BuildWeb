const express=require("express");
const router=express.Router();

const VideoController=require("../controllers/video.controller"); 


//create
router.get("/create",VideoController.create);
router.post("/create",VideoController.postcreate);
//list
router.get("/list",VideoController.list);
//edit
router.get("/edit/:id",VideoController.edit);
router.post("/edit/:id",VideoController.postedit);
//delete
router.post("/:id",VideoController.destroy);
//detail
router.get("/detail/:slug",VideoController.detail);
//home
router.get("/",VideoController.home);


module.exports=router;