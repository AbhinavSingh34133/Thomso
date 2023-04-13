const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const path = require("path")
//const jsdom = require("jsdom");



const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.ejs")
   const url = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=h7gyJRWrjbg&key=AIzaSyDlX9sbP3TQxzAH88MJz7fKWwMrSLybB2I"
    https.get(url,(response)=>{
        response.on("data",function(data){
            const vdata = JSON.parse(data)
            const views =  vdata.items[0].statistics.viewCount;
            console.log(views)
        })
    })
})
app.use(express.static(path.join(__dirname, 'views')));


app.listen(3000,function(){
    console.log("Started");
})