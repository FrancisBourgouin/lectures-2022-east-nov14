import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });

    // const newFormData = {...formData}
    // newFormData[name] = value
    // setFormData(newFormData)
  };

  return { formData, handleChange, handleSubmit };
}
