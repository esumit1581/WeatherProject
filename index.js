const express = require("express");
const app=express();
const https=require("https");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
console.log("Post request received")
})

  // const query=req.body.City;
  // console.log(query);
  // const apiKey="79662856c4e9c015d976ad82d120d164";
  // const unit="metric";
  //
  // const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
  //
  // https.get(url,function(response){
  //   response.on("data",function(data){
  //
  //     const weatherData=JSON.parse(data)
  //     const temp=weatherData.main.temp;
  //     const desc=weatherData.weather[0].description;
  //     const icon=weatherData.weather[0].icon;
  //     const iconURL= "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  //
  //
  //     res.write("<p>The weather is currently " +desc+"<p>");
  //     res.write("<h1>The temperature in"+query+ "is "+ temp + " degree celsius</h1>");
  //     res.write("<img src='" + iconURL+ "'/>")
  //     res.send();
  //   });
  // });
// })


app.listen(3000,function(){
  console.log("Server running at port 3000");
});
