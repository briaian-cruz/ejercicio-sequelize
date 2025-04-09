const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const userRouter = require("./controllers/userController.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter());

app.get("/", (req, res) => res.send("servidor escuchando"));

app.listen(8080, () => console.log("http://localhost:8080"));
