import useForm from "../hooks/useForm";
export default function StatementForm(props) {
  const initialValues = {
    subject: "",
    content: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  const parsedOptions =
    Array.isArray(props.subjects) &&
    props.subjects.map((subject) => <option value={subject}>{subject}</option>);
  return (
    <section className="StatementForm">
      <h2>Add new Statement</h2>
      <form onSubmit={handleSubmit}>
        <select name="subject" onChange={handleChange} value={formData.subject}>
          {parsedOptions}
        </select>

        <textarea
          name="content"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formData.content}
        ></textarea>
        <button>Add statement</button>
      </form>
    </section>
  );
}
