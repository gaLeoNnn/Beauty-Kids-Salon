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
        name={props.name}
        size="small"
        sx={{ marginBottom: "20px", height: "34px" }}
      >
        {" "}
      </TextField>
    </>
  );
}
export default InputForm;
