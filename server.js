const express = require("express");

require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/students", require("./router/studentRouter"));

app.listen(4000, () => console.log("Server up and running"));
