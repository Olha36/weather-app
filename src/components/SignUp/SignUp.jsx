import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button/Button.jsx";
import { LabeledTextfield } from "../ui/LabeledTextfield/LabeledTextfield.jsx";
import { AuthContainer } from "../AuthContainer/AuthContainer.jsx";
import { Link } from "@mui/material";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function SignUp() {
  const navigate = useNavigate();

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      console.log("Registering user:", values);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <AuthContainer
        title="Sign up"
        footer={
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="subtitle2" color="textSecondary">
              Already have an account?
            </Typography>
            <Link href="/" active='true'>
              Sign in
            </Link>
          </Box>
        }
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          gap={1.5}
          width="100%"
          onSubmit={formik.handleSubmit}
        >
          <LabeledTextfield
            id="name"
            label="Name"
            required
            placeholder="Username"
            {...formik.getFieldProps("name")}
            errorMessage={formik.touched.name && formik.errors.name}
          />

          <LabeledTextfield
            id="email"
            label="Email"
            required
            placeholder="E-Mail"
            {...formik.getFieldProps("email")}
            errorMessage={formik.touched.email && formik.errors.email}
          />

          <LabeledTextfield
            id="password"
            label="Password"
            required
            type="password"
            placeholder="At least 6 characters"
            {...formik.getFieldProps("password")}
            errorMessage={formik.touched.password && formik.errors.password}
          />

          <LabeledTextfield
            id="confirmPassword"
            label="Confirm password"
            required
            type="password"
            placeholder="Re-enter your password"
            {...formik.getFieldProps("confirmPassword")}
            errorMessage={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <Button
            type="submit"
            size="large"
            sx={{ width: "100%" }}
            loading={formik.isSubmitting}
          >
            Sign up
          </Button>
        </Box>
      </AuthContainer>
    </>
  );
}
