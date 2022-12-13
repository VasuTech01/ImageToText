const express = require("express");
const dotenv=require("dotenv").config();
const airouter = require("./routes/openai_routes");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/openai", airouter);
app.listen(port, () => {
    console.log("listening on port ", port);
})