const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv=require("dotenv").config();
const airouter = require("./routes/openai_routes");
const app = express();
const port = process.env.PORT || 3000;
app.use(session({
    secret: "HellowWorld",
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/openai", airouter);
app.get("/", (req, res) => {
    console.log(req.session);
    res.send("Hellow World");
})
app.listen(port, () => {
    console.log("listening on port ", port);
})