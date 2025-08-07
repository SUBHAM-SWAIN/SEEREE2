const express = require("express");
const app = express();
const connectDB = require("./ConnectDB");
const PORT = 8080;
const path = require("path");
const staticRouter = require("./Routes/staticRoutes.js");
const dynamicRouter = require("./Routes/dynamicRoutes.js");
const session = require("express-session");

// Connect to MongoDB
connectDB("mongodb://127.0.0.1:27017/seeree");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

// app.get("/", (req, res) => {
//   return res.render("index");
// });
app.use("/", staticRouter);
app.use("/api", dynamicRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
