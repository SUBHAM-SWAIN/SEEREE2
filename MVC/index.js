const express = require("express");
const app = express();
const port = 8000;
const router = require("./Routs/UserRoutes.js");
const connectDB = require("./Utils/ConnectDB.js");


connectDB("mongodb://127.0.0.1:27017/seeree");

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", router);
// app.use("/insertData",router)

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
