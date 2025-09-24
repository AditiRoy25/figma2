import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Reservationform from "../../Form/ReservationForm";
import re1 from "../../assets/Reservation/re1.png";
import re2 from "../../assets/Reservation/re2.png";
import re3 from "../../assets/Reservation/re3.png";
import re4 from "../../assets/Reservation/re4.png";
import Header from "../../components/Header";
import ReservationForm from "../../Form/ReservationForm";

const Reservation = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        width: "94%",
        margin: "auto",
      }}
    >
      <Header
        screnName={"Home"}
        title={location.pathname}
        desc={
          " Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.Facilisis eget cras sit semper sit enim."
        }
      />

      <Box textAlign="center" mb={5} sx={{ mt: "100px", mb: "100px" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Reservation
        </Typography>
        <Typography
          variant="body1"
          maxWidth="600px"
          mx="auto"
          mb={3}
          color="text.primary"
          sx={{ mb: "30px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget cras sit semper sit enim.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center">
        
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[re1, re2, re3, re4].map((img, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  component="img"
                  src={img}
                  alt={`reservation-${index}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#122222", 
              borderRadius: "12px",
              p: 4,
            }}
          >
            <ReservationForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reservation;
