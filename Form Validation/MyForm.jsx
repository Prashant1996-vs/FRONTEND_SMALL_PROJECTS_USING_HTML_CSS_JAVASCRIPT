import React, { useState } from "react";
function MyForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid:", formData);
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = (data) => {
    let errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  return (
    <form>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <br></br>
      {errors.username && <span className="error">{errors.username}</span>}
      <br></br>
      <input name="email" value={formData.email} onChange={handleChange} />
      <br></br>
      {errors.email && <span className="error">{errors.email}</span>}
      <br></br>
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <br></br>
      {errors.password && <span className="error">{errors.password}</span>}
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
export default MyForm;
