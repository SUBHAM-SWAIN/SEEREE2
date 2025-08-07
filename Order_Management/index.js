const express = require("express");
const connectDB = require("./lib/connectDB");
const app = express();
const PORT = 5001;
const path = require("path");
const dynamicRoute = require("./Routes/dynamicRoutes");
const staticRouter = require("./Routes/staticRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));


app.use("/",staticRouter);
app.use("/api", dynamicRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB("mongodb://127.0.0.1:27017/seeree");
});
