import { useState } from "react";

export default function LoginForm(props) {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit">Login</button>
    </form>
  );
}
