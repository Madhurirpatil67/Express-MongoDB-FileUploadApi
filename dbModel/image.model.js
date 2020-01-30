let mongoose=require("mongoose");

let imageSchema=new mongoose.Schema({
    image:{type:String}
});

let imageModel=mongoose.model("FileUplaod",imageSchema);

module.exports=imageModel;