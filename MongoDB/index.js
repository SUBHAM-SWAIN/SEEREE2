const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/seeree")
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB" + err.message);
  });

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

let StudentModel = mongoose.model("Student", studentSchema);

app.get("/getData", async (req, res) => {
  const students = await StudentModel.find();
  if (students.length > 0) {
    return res.json(students);
  } else {
    return res.json({ message: "No data found" });
  }
});

app.post("/insertData", async (req, res) => {
  let { name, email, age, phone } = req.body;
  if (!name || !email || !age || !phone) {
    return res.json({ message: "All field are required" });
  } else {
    const student = await StudentModel.create({
      name,
      email,
      age,
      phone,
    });
    if (student) {
      return res.json({ message: "Data inserted Successfully" });
    } else {
      return res.json({ message: "something went wrong" });
    }
  }
});

app.get("/singleData/:id", async (req, res) => {
  const id = req.params.id;
  const student = await StudentModel.findById(id);
  if (student) {
    return res.json(student);
  } else {
    return res.json({ message: "No data found" });
  }
});

app.put("/updateData/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age, phone } = req.body;
  if (!name || !email || !age || !phone) {
    return res.json({ message: "All field are Requitred" });
  } else {
    const student = await StudentModel.findByIdAndUpdate(id, {
      name,
      email,
      age,
      phone,
    });
    if (student) {
      return res.json({ message: "data updated Successfully" });
    } else {
      return res.json({ message: "data updation Faild" });
    }
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findByIdAndDelete(id);
  if (student) {
    return res.json({ message: "Data Deleted Successfully" });
  } else {
    return res.json({ message: "Data Deletion failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the MongoDB Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
