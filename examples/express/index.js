const express = require("express");
const app = express();
const port = 8080;

const aygo = require("aygo");
const Aygo = aygo.Aygo;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(Aygo.sayHello());
    console.log(`server started at http://localhost:${port}`);
});