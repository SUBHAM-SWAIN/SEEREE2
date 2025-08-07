const User = require("../Model/UserModel");

exports.show = (req, res) => {
  return res.send("Hello From MVC");
};
exports.insertData = async (req, res) => {
  let { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    return res.json({ message: "All field are required" });
  } else {
    const user = await User.create({
      name,
      email,
      password,
      phone,
    });
    if (user) {
      return res.json({ message: "Data inserted Successfully" });
    } else {
      return res.json({ message: "something went wrong" });
    }
  }
};

exports.fetchData = async (req, res) => {
  const users = await User.find();
  if (users) {
    return res.json({ message: "Data fetched Successfully", data: users });
  } else {
    return res.json({ message: "No data found" });
  }
};

exports.singleUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    return res.json({ message: "User found", data: user });
  } else {
    return res.json({ message: "User not found" });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phone } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    {
      name,
      email,
      password,
      phone,
    },
    { new: true }
  );
  if (user) {
    return res.json({ message: "User updated successfully", data: user });
  } else {
    return res.json({ message: "User not found" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);
  if (user) {
    return res.json({ message: "User deleted successfully" });
  } else {
    return res.json({ message: "User not found" });
  }
}


