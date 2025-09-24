import React from "react";
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import MenuCard from "../components/MenuCard";

import img from "../assets/cardimg/img.png";
import img2 from "../assets/cardimg/img2.png";
import img3 from "../assets/cardimg/img3.png";
import img4 from "../assets/cardimg/img4.png";
import img5 from "../assets/cardimg/img5.png";
import img6 from "../assets/cardimg/img6.png";
import img7 from "../assets/cardimg/img7.png";
import img8 from "../assets/cardimg/img8.png";
import img9 from "../assets/cardimg/img9.png";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const menuData = [
  {
    id: 1,
    name: "Indian",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.250",
    image: img,
  },
  {
    id: 2,
    name: "Mexican",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.99",
    image: img2,
  },
  {
    id: 3,
    name: "Italian",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.175",
    image: img3,
  },
  {
    id: 4,
    name: "Chinese",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.156",
    image: img4,
  },
  {
    id: 5,
    name: "Bengali",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.159",
    image: img5,
  },
  {
    id: 6,
    name: "Arabian",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.135",
    image: img6,
  },
  {
    id: 7,
    name: "Japanese",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.450",
    image: img7,
  },
  {
    id: 8,
    name: "Fried Chicken",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.199",
    image: img8,
  },
  {
    id: 9,
    name: "Kolkata Style Roll",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.85",
    image: img9,
  },
];

const categories = [
  { id: 1, name: "Indian" },
  { id: 2, name: "Mexican" },
  { id: 3, name: "Italian" },
  { id: 4, name: "Chinese" },
  { id: 5, name: "Bengali" },
  { id: 6, name: "Arabian" },
  { id: 7, name: "Japanese" },
];

export default function Menu() {
  const location=useLocation()
  console.log('location', location)
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
          Our Delicious Menu
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

        {/*        
        <Box sx={{width:"95px", borderRadius:"8px", padding:"17px 16px 17px 16px" ,gap:"10px", display:"flex" ,flexDirection:"row",alignItems:"center",}}> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "auto",
            width: "60%",
          }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant="outlined"
              sx={{
                borderRadius: "8px",
                padding: "10px 20px",
                border: "1px solid white",
                backgroundColor: (theme) => theme.palette.background.default,
                color: (theme) => theme.palette.text.primary,
              }}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* </Box> */}
      </Box>

      <Grid container columns={12} spacing={4}>
        {menuData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <MenuCard value={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
