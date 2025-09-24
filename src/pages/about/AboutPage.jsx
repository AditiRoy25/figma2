import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import img1 from "../../assets/Aboutimg/faq1.png";
import img2 from "../../assets/Aboutimg/faq2.png";
import img3 from "../../assets/Aboutimg/faq3.png";
import img4 from "../../assets/Aboutimg/faq4.png";

const faqs = [
  { id: 1, question: "Do you offer home delivery?" },
  { id: 2, question: "Can I book a table online?" },
  { id: 3, question: "Do you have vegetarian and vegan option?" },
  { id: 4, question: "What are your opening hours?" },
];

const AboutPage = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", py: 6 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - 2x2 Image Grid */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="img"
                src={img1}
                alt="faq-1"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={img2}
                alt="faq-2"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={img3}
                alt="faq-3"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                component="img"
                src={img4}
                alt="faq-4"
                sx={{ width: "100%", borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side - FAQ List */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {faqs.map((faq) => (
              <Grid item xs={12} key={faq.id}>
                <Paper
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#0F1A17",
                    color: "white",
                  }}
                  elevation={0}
                >
                  <Typography variant="body1">{faq.question}</Typography>
                  <IconButton sx={{ color: "white" }}>
                    <AddIcon />
                  </IconButton>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
