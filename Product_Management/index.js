const express = require("express");
const app = express();
const PORT = 5002;
const path = require("path");
const staticRouter = require("./Routes/staticRoutes");
const connectDB = require("./utils/connectDB");
const dynamicRouter = require("./Routes/dynamicRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("Views"));

app.use("/", staticRouter);
app.use("/api",dynamicRouter);

app.listen(PORT, () => {
  console.log(`app is listen at port ${PORT}`);
  connectDB();
});
