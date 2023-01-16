import useForm from "../hooks/useForm";

export default function SubjectForm(props) {
  const initialValues = {
    subject: "",
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <section className="SubjectForm">
      <h2>Add new Subject</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          value={formData.value}
        />
        <button>Add statement</button>
      </form>
    </section>
  );
}
