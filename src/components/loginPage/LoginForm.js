import React, { useState, useContext } from "react";
import { Stack } from "@mui/system";
import { Typography, Button, IconButton, InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import FormProvider from "../forms/FormProvider";
import FTextField from "../forms/FTextField";
import FCheckbox from "../forms/FCheckbox";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormContainer } from "./LoginFormContainer";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../authentication/AuthContext.js";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function LoginForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: { username: "", password: "", remember: false },
  });
  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    auth.signin(data.username, () => {
      navigate(-1);
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <LoginFormContainer>
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        Login
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={4}>
          <FTextField name="username" label="Username" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FCheckbox name="remember" label="Remember me" />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </FormProvider>
    </LoginFormContainer>
  );
}

export default LoginForm;
