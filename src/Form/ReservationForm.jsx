import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  InputAdornment,
} from "@mui/material";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Phone number is required"),
  person: yup
    .number()
    .typeError("Number of persons is required")
    .min(1, "At least 1 person required")
    .required("Number of persons is required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
});

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Table booked successfully!");
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "30px",
        backgroundColor: "#112B2C",
        borderRadius: "12px",
      }}
    >
      {/* Name */}
      <TextField
        label="Your Name"
        fullWidth
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaUser color="gray" />
            </InputAdornment>
          ),
        }}
      />

      {/* Email */}
      <TextField
        label="Email"
        type="email"
        fullWidth
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaEnvelope color="gray" />
            </InputAdornment>
          ),
        }}
      />

      {/* Phone */}
      <TextField
        label="Phone Number"
        type="tel"
        fullWidth
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaPhone color="gray" />
            </InputAdornment>
          ),
        }}
      />

      {/* Person */}
      <TextField
        label="Person"
        type="number"
        fullWidth
        {...register("person")}
        error={!!errors.person}
        helperText={errors.person?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaUsers color="gray" />
            </InputAdornment>
          ),
        }}
      />

      {/* Date & Time */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("date")}
            error={!!errors.date}
            helperText={errors.date?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaCalendarAlt color="gray" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Time"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("time")}
            error={!!errors.time}
            helperText={errors.time?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaClock color="gray" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          backgroundColor: "#d77b30",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#b96428" },
        }}
      >
        {isSubmitting ? "Booking..." : "Book a Table"}
      </Button>
    </Box>
  );
};

export default ReservationForm;
