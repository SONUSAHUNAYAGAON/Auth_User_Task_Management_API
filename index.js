const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./api/routes/user");
const taskRouter = require("./api/routes/task");
const dotenv = require("dotenv");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server running on port No. 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
