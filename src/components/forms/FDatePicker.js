import React from "react";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function FDatePicker({ name, label, ...other }) {
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            views={["day", "month", "year"]}
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={(value) => onChange(dayjs(value).format("YYYY-MM-DD"))}
            disableFuture
            renderInput={(params) => (
              <TextField
                variant="standard"
                margin="dense"
                fullWidth
                color="primary"
                {...params}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default FDatePicker;
