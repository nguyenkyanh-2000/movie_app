import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Chip } from "@mui/material";

// options: [{id: , name: }]
function FAutoComplete({ name, label, options, setCurrentKeyword, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          multiple
          onChange={(event, option) => {
            onChange(option);
          }}
          onInputChange={(event, value) => setCurrentKeyword(value)}
          options={options}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          isOptionEqualToValue={(option, value) => {
            return option.id === value.id;
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option.name}
                size="small"
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              onChange={(event, value) => {
                onChange(value);
              }}
              margin="normal"
              variant="outlined"
            />
          )}
          {...other}
        />
      )}
    />
  );
}

export default FAutoComplete;
