import React from "react";
import { Box, TextField, Button, Grid, InputAdornment } from "@mui/material";
import { FaUser, FaEnvelope, FaGlobe, FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Your name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  website: yup.string().url("Enter a valid URL").notRequired(),
  message: yup.string().required("Message cannot be empty"),
});

const SingleForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Comment Submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Your comment has been posted!");
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
        p: 3,
        backgroundColor: "#112B2C",
        borderRadius: "12px",
        marginBottom:"80px"
      }}
    >
      <Box sx={{display:"flex", flexDirection:"row" , alignItems:"center" ,justifyContent:"space-evenly"}}>
        {" "}
    <Grid container spacing={2}>
  
  <Grid item xs={6}>
    <label style={{ display: "block", marginBottom: 4 }}>Your Name :</label>
    <TextField
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
  </Grid>


  <Grid item xs={6}>
    <label style={{ display: "block", marginBottom: 4 }}>Email :</label>
    <TextField
      fullWidth
      type="email"
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
  </Grid>
</Grid>


      </Box>

      <lebel>Website : </lebel>
      <TextField
        fullWidth
        {...register("website")}
        error={!!errors.website}
        helperText={errors.website?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaGlobe color="gray" />
            </InputAdornment>
          ),
        }}
      />

      <lebel>Write a Message : </lebel>
      <TextField
        fullWidth
        multiline
        rows={4}
        {...register("message")}
        error={!!errors.message}
        helperText={errors.message?.message}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ alignSelf: "flex-start", mt: 1 }}
            >
              <FaPen color="gray" />
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          backgroundColor: "#d77b30",
          fontWeight: "bold",
          alignSelf: "flex-start",
          "&:hover": { backgroundColor: "#b96428" },
        }}
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </Button>
    </Box>
  );
};

export default SingleForm;
