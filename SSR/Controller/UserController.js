const User = require("../Models/UserModel.js");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password, phone, age, gender, role } = req.body;
  if (!name || !email || !password || !phone || !age || !gender || !role) {
    return res.json({ message: "All fields are required" });
  }
  let hasPassword = bcrypt.hashSync(password, 10);
  let user = await User.create({
    name,
    email,
    password: hasPassword,
    phone,
    age,
    gender,
    role,
  });
  if (user) {
    return res.redirect("/login");
  } else {
    return res.redirect("/register");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.redirect("/register");
  }
  let user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User not found" });
  }
  let isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Invalid password" });
  }
  req.session.user = {
    id: user._id,
    name: user.name,
    role: user.role,
  };
  if (user.role === "admin") {
    return res.redirect("/admin/dashbord");
  } else {
    return res.redirect("/user/dashbord");
  }
};

exports.editUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.json({ message: "User ID is required" });
  }
  let user = await User.findById(userId);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  return res.render("editUser", { user });
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;

  const { name, email, phone, age, gender } = req.body;
  if (!name || !email || !phone || !age || !gender) {
    return res.json({ message: "All fields are required" });
  }
  await User.findByIdAndUpdate(id, {
    name: name,
    email: email,
    phone: phone,
    age: age,
    gender: gender,
  });

  return res.redirect(`/admin/dashbord`);
};

exports.deleteUSer = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.json({ message: "User ID is required" });
  }
  let user = await User.findByIdAndDelete(userId);
  if (!user) {
    return res.json({ message: "User not found" });
  }
  return res.redirect(`/admin/dashbord`);
};
