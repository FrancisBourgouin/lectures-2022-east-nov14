import { useState } from "react";

export default function UserForm(props) {
  const initialValues = {
    email: "",
    password: "",
    name: "",
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
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit">Create User</button>
    </form>
  );
}
