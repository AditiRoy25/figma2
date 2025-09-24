import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CartContext from "../hooks/context/cart/CreatecartContext";
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";

export default function MenuCard({ value }) {
  const { addtoCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    const data = Cookies.get("loginData");
    setLoginData(data);
    console.log("loginData", data);
  }, []);

  if (!value) return null;
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={value.image}
        alt={value.name}
      />
      <CardContent sx={{ color: (theme) => theme.palette.text.secondary }}>
        <Typography gutterBottom variant="h6">
          {value.name}
        </Typography>
        <Typography variant="body2" color="text.primary" mb={1}>
          {value.desc}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" color="primary">
          {value.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between" }}
        onClick={() => {
          loginData ? addtoCart(value.id) : setOpen(true);
        }}
      >
        {/* <Button size="small" color="primary" sx={{paddingLeft:"4px"}}>
          Order Now
        </Button> */}
        <ShoppingBagIcon sx={{ color: "text.primary" }} />
      </CardActions>
      <LoginModal
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
        navScreen={"/AddToCard"}
      />
    </Card>
  );
}
