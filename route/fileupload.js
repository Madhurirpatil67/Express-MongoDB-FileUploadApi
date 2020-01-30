let express=require("express");
let router=express.Router();
let multer=require("multer");
let port="http://localhost:4600";
let imagemodel=require("../dbModel/image.model");

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"/ConnectMongoToExpress/uploads/")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
let fileFilter=function(req,file,cb){
    if(file.mimetype==="image/jpg" || file.mimetype==="image/png" || file.mimetype==="image/jpeg")
      {
        cb(null,true);
      }
    else
      {
       cb(null,false);
      }
}
let upload=multer({
    storage:storage,
    limits: {
            filesize:1024*1024*5
        },
    fileFilter:fileFilter
});
router.post("/file",upload.single("image"),async(req,res)=>{
   let files=new imagemodel({
       image:port+"/uploads/"+req.file.filename
   })
   let data=await files.save();
   res.send(data);
});

module.exports=router;