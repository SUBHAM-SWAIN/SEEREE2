import { useState } from "react";

function Form() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
        name="name"
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        //   value={formData.name}
        />
        <input
        name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
        //   value={formData.email}
        />
        <input
        name="password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange} 
        //   value={formData.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
