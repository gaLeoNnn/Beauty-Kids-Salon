import TextField from "@mui/material/TextField";

function InputForm({ label, type, placeholder, id, value, defaultValue, name, onChange, pattern }) {
  return (
    <>
      <label className="feed-form__name">{label}</label>
      <TextField
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        size="small"
        pattern={pattern}
        sx={{ marginBottom: "20px", height: "34px" }}
      ></TextField>
    </>
  );
}
export default InputForm;
