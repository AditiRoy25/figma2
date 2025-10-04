import React from "react";
import { Controller } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";

const DynamicDropdown = ({
  name,
  label,
  control,
  errors,
  options,
  ...props
}) => {
  const isSelect = Array.isArray(options) && options.length > 0;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          select={isSelect}
          label={label}
          fullWidth
          margin="normal"
          error={!!errors[name]}
          helperText={errors[name]?.message}
          sx={{
          }}
        >
          {isSelect &&
            options.map((opt) => (
              <MenuItem key={opt.id} value={opt.name}>
                {opt.name}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
};

export default DynamicDropdown;
