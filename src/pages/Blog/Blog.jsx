import React from "react";


import { Box, Grid, Typography } from "@mui/material";
import BlogCard from "../../components/BlogCard";
import Frame1 from "../../assets/blog/Frame1.png";
import Frame2 from "../../assets/blog/Frame2.png";
import Frame3 from "../../assets/blog/Frame3.png";
import Frame4 from "../../assets/blog/Frame4.png";
import Frame5 from "../../assets/blog/Frame5.png";
import Frame6 from "../../assets/blog/Frame6.png";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
const Blog = () => {
    const location=useLocation()
  const blogData = [
    {
      id: 1,
      name: "10 Benifits of Doing a Detox",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame1,
    },
    {
      id: 2,
      name: "Freash Snacks Morning",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame2,
    },
    {
      id: 3,
      name: "10 Reasons You'll Love Us",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame3,
    },
    {
      id: 4,
      name: "New restaurant New Delhi",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame4,
    },
    {
      id: 5,
      name: "Freash Paneer Veg",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame5,
    },
    {
      id: 6,
      name: "We have perfect Dish",
      author: "Admin",
      date: "17 June 2025",
      comments: "5 Comments",
      desc: "Lorem Ipsum is simply dummy text.",
      cap: "READ MORE>",
      image: Frame6,
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        width: "94%",
        margin: "auto",
      }}
    >
     <Header screnName={"Home"} title={location.pathname} desc={" Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.Facilisis eget cras sit semper sit enim."}/>


      <Box
        textAlign="center"
        mb={5}
        sx={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Blog
        </Typography>
        <Typography
          variant="body1"
          maxWidth="600px"
          mx="auto"
          mb={3}
          color="text.primary"
          sx={{ marginBottom: "30px" }}
        >
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget cras sit semper sit enim.
        </Typography>

        <Grid container columns={12} spacing={4}>
          {blogData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <BlogCard value={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;
