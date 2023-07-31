function InputForm(props) {
  return (
    <>
      <label className="feed-form__name">{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        className={`${props.className ? props.className : ""}`}
      />
    </>
  );
}
export default InputForm;
