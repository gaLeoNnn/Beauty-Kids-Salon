import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const services = [
  { id: 1, value: "Стрижка для мальчика" },
  { id: 2, value: "Стрижка для девочки" },
  { id: 3, value: "Бритье под ноль" },
  { id: 4, value: "Стрижка челки для девочки" },
  { id: 5, value: "Прокалывание мочек ушей Inverness" },
  { id: 6, value: "Брейды с канекалоном/без канекалона" },
  { id: 7, value: "3Д косы с канекалоном" },
];

export default function BasicSelect({ onChange, value }) {
  return (
    <Select
      size="small"
      sx={{ marginBottom: "20px" }}
      id="demo-simple-select"
      value={value}
      name="service"
      onChange={onChange}
    >
      {services.map(item => {
        return (
          <MenuItem key={item.id} value={item.value}>
            {item.value}
          </MenuItem>
        );
      })}
    </Select>
  );
}
