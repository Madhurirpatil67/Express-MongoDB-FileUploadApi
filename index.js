let express=require("express");
let app=express();
let mongoose=require("mongoose");
let port=4600||process.env.PORT;
let file=require("./FileUpload/route/fileupload");
app.use(express.json());
app.use("/uploads",express.static("uploads"));
mongoose
.connect("mongodb://localhost/STOREDATA",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log(`connected to db`))
.catch(error=>console.log(`something went to wrong ${error.message}`))
app.listen(port,()=>console.log(`connected to port`));

app.use("/uploadfile",file);
