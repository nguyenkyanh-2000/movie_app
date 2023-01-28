import React from "react";
import { Stack, Box } from "@mui/system";
import { Typography, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

const stackStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "500px",
  backgroundColor: "red",
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Stack direction="column" sx={stackStyle} spacing={8}>
      <Typography variant="h4" component="div" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      <Box component={"form"} onSubmit={onSubmit}>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              placeholder={"Username"}
              {...register("username", { required: true })}
            />
          )}
        />
        {errors.username?.type === "required" && (
          <Typography>Please fill in the username</Typography>
        )}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextField
              onChange={onChange}
              value={value}
              placeholder={"Password"}
              {...register("password", { required: true })}
            />
          )}
        />
        {errors.password?.type === "required" && (
          <Typography>Please fill in the password</Typography>
        )}
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Box>
    </Stack>
  );
}

export default LoginForm;
