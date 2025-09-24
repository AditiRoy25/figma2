import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import a1 from "../../assets/Addcardimg/a1.png";
import a2 from "../../assets/Addcardimg/a2.png";
import a3 from "../../assets/Addcardimg/a3.png";
import aup1 from "../../assets/Addcardimg/aup1.png";
import aup2 from "../../assets/Addcardimg/aup2.png";
import aup3 from "../../assets/Addcardimg/aup3.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Header from "../../components/Header";
import AddCard from "../../components/AddCard";
import Navbar from "../../layout/Navbar";
const AddData = [
  {
    id: 1,
    name: "Indian",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.250",
    img: a1,
  },
  {
    id: 2,
    name: "Mexican",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.99",
    img: a2,
  },
  {
    id: 3,
    name: "Italian",
    desc: "Lorem Ipsum is simply dummy text.",
    price: "Rs.175",
    img: a3,
  },
];

const cartData = [
  {
    id: 1,
    image: aup1,
    name: "Fried Chicken",
    desc: "Lorem Ipsum is simply dummy text.",
    price: 250,
    qty: 2,
  },
  {
    id: 2,
    name: "Chocolate Ice cream",
    desc: "Lorem Ipsum is simply dummy text.",
    price: 135,
    image: aup2,
    qty: 4,
  },
  {
    id: 3,
    name: "Chiken Burger",
    desc: "Lorem Ipsum is simply dummy text.",
    price: 175,
    image: aup3,
    qty: 2,
  },
];
const AddToCard = () => {
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const location = useLocation();
 const [cartList, setCartList] = useState();

   useEffect(() => {
      const fetchdata = async () => {
        try {
          const res = await api.get(`/cart`);
          setCartList(res.data);
        } catch (error) {
          console.error("error", error);
        }
      };
      fetchdata();
    }, []);


  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        width: "94%",
        margin: "auto",
      }}
    >
       <Navbar/>
      <Header
        screnName={"Home"}
        title={location.pathname}
        desc={
          " Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.Facilisis eget cras sit semper sit enim."
        }
      />

      <Box
        textAlign="center"
        mb={5}
        sx={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Cart
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
            <Card key={cat.id} sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={cat.image}
                alt="Live from space album cover"
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">{cat.name}</Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                   {cat.desc}
                  </Typography>
                  <Typography>{cat.price}</Typography>
                </CardContent>
                
              </Box>
            </Card>
          ))}
        </div> */}
      </Box>
      {/* ///////////////////////////grid start////////////////// */}


      <Box sx={{width:"90%", margin:"auto",display:"flex", justifyContent:"space-between",marginBottom:"10px",padding:"40px"}}>
        <Grid container spacing={35}>
          {/* /////////////////////Left Side - Cart Items////////////////////// */}
          <Grid item xs={12} md={6}>
            {cartData.map((item) => (
              <AddCard key={item.id} item={item} oriantation={"vartical"} />
            ))}
          </Grid>

          {/* /////////////////////////////Right Side - Summary////////////////// */}
          <Grid item xs={12} md={6}>
            <Box bgcolor="#111" color="white" p={3} borderRadius={2}>
              <Typography variant="h6" mb={2}>
                Order Summary
              </Typography>

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Item</Typography>
                <Typography>{cartData.length}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Subtotal</Typography>
                <Typography  sx={{ color: "text.secondary" }}>Rs.{subtotal}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Shipping</Typography>
                <Typography  sx={{ color: "text.secondary" }}>Rs.0.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>Tax</Typography>
                <Typography  sx={{ color: "text.secondary" }}>Rs.0.00</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography fontWeight="bold">Total</Typography>
                <Typography fontWeight="bold"  sx={{ color: "text.secondary" }}>
                  Rs.{subtotal}
                </Typography>
              </Box>

              {/*//////////////// Coupon //////////////////////*/}
              <Box display="flex" gap={1} mb={2}>
                <TextField
                  placeholder="Coupon Code"
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{
                    input: { color: "white" },
                    "& fieldset": { borderColor: "text.secondary" },
                  }}
                />
                <Button variant="contained" sx={{ bgcolor: "text.secondary" }}>
                  APPLY
                </Button>
              </Box>

              <Typography variant="body2" mb={2}>
                Free Delivery above Rs.500
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{ bgcolor: "text.secondary", color: "black", fontWeight: "bold" }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* /////////////////////////////////// lower card///////////////////////////// */}

      <Grid container columns={12} columnSpacing={1} sx={{padding:"50px" ,margin:"40px"}}>
        {AddData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <AddCard item={item} oriantation={"horizental"} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AddToCard;
