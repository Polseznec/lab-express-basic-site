const express = require("express");
const hbs = require("hbs");

const app = express();


app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");


app.get("/", (request, reponse, next) =>{
    reponse.render("home.hbs");
});

app.get("/about", (request,reponse,next) =>{
    reponse.render("about.hbs");
});

app.get ("/achievement", (request, reponse, next) => {
    reponse.render("achievement.hbs");
});

app.listen(3000);