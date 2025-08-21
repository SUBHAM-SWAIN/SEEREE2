import React from "react";

function Form() {
  let [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Message"
          name="message"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
