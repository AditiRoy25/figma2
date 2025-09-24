import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/Api";
import l1 from "../assets/LoginImg/l1.png";
import singupDown from "../assets/image/singupDown.png";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character"),
});

const Login = ({navScreen,onClose}) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await api.get(`/users`);
        setUserList(res.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchdata();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (userList.length === 0) {
        toast.error("Failed to connect");
        return;
      }

      const matchEmail = userList.find(
        (item) => item?.email?.toLowerCase() === data?.email?.toLowerCase()
      );

      setLoading(true);
      setTimeout(() => {
        if (matchEmail) {
          if (matchEmail.password === data.password) {
            toast.success("Login success");
            Cookies.set("loginData", JSON.stringify(matchEmail)); 
            reset();
            navigate(navScreen?navScreen:'/'); 
          } else {
            toast.error("Password is incorrect");
          }
        } else {
          toast.error("Invalid email or password");
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("error", error);
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
        backgroundColor: "#414040ff",
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 11 }}
        sx={{ backgroundColor: "black" }}
      >
        <Grid item xs={12} sm={6}>
          <img
            src={l1}
            style={{ height: "400px", width: "350px", margin: "50px" }}
            alt="login-img"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "280px",
              borderRadius: "6px",
              padding: "5px",
              marginTop: "10px",
              gap: "3px",
            }}
          >
            <Box onClick={onClose} sx={{display:'flex',flexDirection:'column'}} >
            <CloseIcon
              sx={{
                display: "flex",
                alignSelf: "end",
                color: "text.secondary",
                cursor: "pointer",
              }}
              />
            </Box>
            <Typography variant="body1" sx={{ color: "white" }}>
              Your Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              required
              margin="normal"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName")}
              sx={{ bgcolor: "#414040ff", borderRadius: "18px" }}
            />

            <Typography variant="body1" sx={{ color: "white" }}>
              Email
            </Typography>
            <TextField
              type="email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
              sx={{ bgcolor: "#414040ff", borderRadius: "18px" }}
            />

            <Typography variant="body1" sx={{ color: "white" }}>
              Password
            </Typography>
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
              sx={{ bgcolor: "#414040ff", borderRadius: "18px" }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <p style={{ color: "white" }}>
                Forget Password? <Link to="/singup">Signup</Link>
              </p>
              <Button
                type="submit"
                disabled={loading}
                sx={{ backgroundColor: "text.secondary", color: "white" }}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
            </div>

            <img src={singupDown} alt="signup-down" />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
