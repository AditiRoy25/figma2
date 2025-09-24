import React, { useState } from "react";
import { Box, TextField, Button, Grid, InputAdornment } from "@mui/material";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjects: "",
    masseage: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.subjects) newErrors.subjects = "sub is required";
    if (!formData.message) newErrors.message = "message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      alert("Table booked successfully!");
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "30px",
        backgroundColor: (theme) => theme.palette.background.default,
        
        borderRadius: "12px",
      }}
    >
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
            <level>My Name</level>
          
          <TextField
          sx={{borderRadius:"10px",backgroundColor: "#112B2C",}}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser color="gray" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaEnvelope color="gray" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <TextField
        label="Subjects"
        name="subjects"
        type="text"
        value={formData.subjects}
        onChange={handleChange}
        fullWidth
        error={!!errors.subjects}
        helperText={errors.subjects}
      />

      <TextField
        label="Message"
        name="message"
        type="text"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        error={!!errors.message}
        helperText={errors.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaUsers color="gray" />
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          backgroundColor: "#d77b30",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#b96428",
            height: "50px",
            width: "50px",
          },
        }}
      >
        {loading ? "Booking..." : "Book a Table"}
      </Button>
    </Box>
  );
};

export default ContactForm;
