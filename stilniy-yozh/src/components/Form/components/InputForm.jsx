import TextField from "@mui/material/TextField";

function InputForm(props) {
  // const classes = useStyles();

  return (
    <>
      <label className="feed-form__name">{props.label}</label>
      <TextField
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        defaultValue={props.defaultValue}
        name={props.name}
        onChange={props.onChange}
        size="small"
        pattern={props.pattern}
        sx={{ marginBottom: "20px", height: "34px" }}
      ></TextField>
    </>
  );
}
export default InputForm;
