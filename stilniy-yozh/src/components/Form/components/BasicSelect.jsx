import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  // const classes = useStyles;

  const services = [
    { id: 1, value: "Стрижка для мальчика" },
    { id: 2, value: "Стрижка для девочки" },
    { id: 3, value: "Бритье под ноль" },
    { id: 4, value: "Стрижка челки для девочки" },
    { id: 5, value: "Прокалывание мочек ушей Inverness" },
    { id: 6, value: "Брейды с канекалоном/без канекалона" },
    { id: 7, value: "3Д косы с канекалоном" },
  ];

  const [service, setService] = React.useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Select
      size="small"
      sx={{ marginBottom: "20px" }}
      id="demo-simple-select"
      value={service}
      name="service"
      onChange={handleChange}
    >
      {services.map((item) => {
        return (
          <MenuItem key={item.id} value={item.value}>
            {item.value}
          </MenuItem>
        );
      })}
    </Select>
  );
}
