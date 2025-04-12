require("dotenv").config();
const express = require("express");
const APP_PORT = process.env.APP_PORT || 8080;
const app = express();
const userRouter = require("./routes/userRoutes.js");
const articuleRouter = require("./routes/articleRoutes.js");
app.use(articuleRouter);
app.use(userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("servidor escuchando"));

app.listen(APP_PORT, () => console.log("http://localhost:8080"));

//sync({ force: true })
