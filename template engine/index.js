const express = require("express");
const { restart } = require("nodemon");

const port = 3000;

const app = express();

app.set('view engine','ejs'); // set the view engine ejs

app.get("/", (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = [1,2,3];
    res.render("index",{siteName:siteName,searchText:searchText,arr})
});

app.get("/blog/:slug", (req, res) => {
    let blogTitle = "Adidas why and when?";
    let blogContent = "Its a very good";
    res.render("blogpost",{blogTitle:blogContent,blogContent:blogContent})
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})