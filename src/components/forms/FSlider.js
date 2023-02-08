import React from "react";
import { useFormContext } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Slider } from "@mui/material";

function FSlider({ name, ...other }) {
  const { control } = useFormContext;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[0, 10]}
      render={({ field }) => (
        <Slider
          {...field}
          onChange={(_, value) => {
            field.onChange(value);
          }}
          valueLabelDisplay="auto"
          max={10}
          step={1}
          {...other}
        />
      )}
    />
  );
}

export default FSlider;
