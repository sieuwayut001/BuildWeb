const mongoose=require("mongoose");
const slug=require("mongoose-slug-generator");

mongoose.plugin(slug);

const schema=mongoose.Schema;

const videomodel = new schema({
    name:{type:String},
    description:{type:String},
    image:{type:String},
    videoid:{type:String},
    slug:{type:String,slug:"name"}
});

module.exports=mongoose.model("videomodel",videomodel);