import { useState } from "react";

export default function UrlForm(props) {
  const initialValues = {
    short_url: "",
    long_url: "",
    description: "",
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
        name="short_url"
        placeholder="Short URL"
        onChange={handleChange}
        value={formData.short_url}
      />
      <input
        type="text"
        name="long_url"
        placeholder="Long URL"
        onChange={handleChange}
        value={formData.long_url}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={formData.description}
      />
      <button type="submit">Add an url</button>
    </form>
  );
}
