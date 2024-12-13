const express = require ("express");
const app = express();


app.use ("/test",(req,res) =>{

 res.send("Maye ke chodo tohri bahin ke bur me");

});


app.use ("/Aai",(req,res) =>{

res.send("|| परमपूज्य गुरुदेवता श्री कलावती माता की जय ||");
});








app.listen(3000, () => {
    console.log("Server is listening on port 3000..MadahFaq")
})
