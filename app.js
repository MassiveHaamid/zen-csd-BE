// required config

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { URL } = require("./utils/config");

// getting all routers
const loginRouter = require("./Routes/loginRoutes");
const studentRouter = require("./Routes/studentRoutes");
const taskRouter = require("./Routes/taskRoutes");
const portfolioRouter = require("./Routes/portfolioRoutes");
const capstoneRouter = require("./Routes/capstoneRoutes");
const webcodeRouter = require("./Routes/webcodeRoutes");
const mockRouter = require("./Routes/mockRoutes");

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI)

  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to Zen-Dashboard");
});

app.use(studentRouter);
app.use(taskRouter);
app.use(loginRouter);
app.use(portfolioRouter);
app.use(capstoneRouter);
app.use(webcodeRouter);
app.use(mockRouter);

app.listen(process.env.PORT, ()=> {console.log("server is started", process.env.PORT)});

module.exports = app;
