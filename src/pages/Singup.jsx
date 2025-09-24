import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
} from "@mui/material";
import Api from "../../src/Api/Api";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEffect, useState } from "react";
import { toast } from "sonner";
 import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const schema = yup.object({
  Firstname: yup.string().required("firstname is required"),
  Lastname: yup.string().required("lastname is required"),
  email: yup.string().required("email is required").email("invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  
    
});

const Singup = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   rememberMe: false,
  // });
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await Api.get(`/users`);
        setUserList(res.data);
      } catch (error) {
        console.error("eroor", error);
      }
    };
    fetchdata();
  }, []);

  const uniqueEmail = userList.map((value) => {
    return value.email;
  });
  // console.log(data.email);

  const onSubmit = async (data) => {
    console.log("ddddddd", data);
    try {
      console.log("try", data);

      if (uniqueEmail.includes(data.email)) {
        // console.log("if",data)
        localStorage.setItem("Logindata" , JSON.stringify(data))
        toast("email already excisted");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        console.log("ifelse", data);
        await Api.post(`/users`, data);

        toast("singup successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (e) {
      toast(e.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
           color: "white"
      }}
    >
      <div style={{bgcolor: "#414040ff", color: "white"}}> <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          width: "280px",
          border: "1px solid white",
          borderRadius: "6px",
          padding: "5px",
          marginTop: "10px",
          gap: "3px",
           bgcolor: "#414040ff", color: "white"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "cursive",
            fontSize: "30px",
            marginBottom:"0px",
            marginTop:"0px"
          }}
        >
          Singup
        </h2>

        

        <TextField
          label="First Name"
          placeholder="Enter first name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={errors.Firstname}
          helperText={errors.Firstname?.message}
          {...register("Firstname")}
        />
        <TextField
          label="Last Name"
          placeholder="Enter last name"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={errors.Lastname}
          helperText={errors.Lastname?.message}
          {...register("Lastname")}
        />
        <TextField
          label="Email"
          placeholder="Enter email"
          type="email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <TextField
          label="Confirm Password"
          placeholder="Re-enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          error={errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        {/* <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I agree to the Terms & Conditions"
              // error={errors.terms}
              // helperText={errors.terms?.message}
              {...register("terms")}
            />
            <FormHelperText error={errors.terms}>
              {errors.terms?.message}
            </FormHelperText> */}

        <FormControlLabel
          control={<Checkbox color="primary" {...register("terms")} />}
          label="I agree to the Terms & Conditions"
        />
        <FormHelperText error={!!errors.terms}>
          {errors.terms?.message}
        </FormHelperText>

        <Button type="submit" sx={{ backgroundColor: "text.secondary", color: "white" }}>
          Singup
        </Button>
        <p>
          Don't have an account? <Link to="/login">Login</Link>
        </p>
      </form></div>
      
     
    </Box>
  );
};

export default Singup;
