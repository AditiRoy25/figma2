import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  CardActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const AddCard= ({ item ,oriantation}) => {
  const [quantity, setQuantity] = useState(item.qty);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <Box>
      {oriantation=="vartical" ? 
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#111",
        color: "white",
        borderRadius: "16px",
        p: 2,
        mb: 2,
        position: "relative",
      }}
    >
     
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          color: "text.secondary",
          "&:hover": { color: "red" },
        }}
      >
        <CloseIcon fontSize="small" sx={{color: "text.secondary"}}/>
      </IconButton>

      
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={{
          width: 120,
          height: 100,
          borderRadius: 2,
          objectFit: "cover",
          mr: 2,
        }}
      />

    
      <CardContent sx={{ flex: 1, p: "0 !important" }}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Rs.{item.price}</Typography>
        </Box>

        <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
          {item.desc}
        </Typography>

       
        <Box display="flex" alignItems="center" gap={1}>
          <Button
            onClick={decrease}
            sx={{
              minWidth: "32px",
              color: "white",
              bgcolor: "#222",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            -
          </Button>
          <Box
            sx={{
              px: 2,
              py: 0.5,
              bgcolor: "#000",
              borderRadius: 1,

            }}
          >
            {quantity}
          </Box>
          <Button
            onClick={increase}
            sx={{
              minWidth: "32px",
              color: "white",
              bgcolor: "#222",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            +
          </Button>
        </Box>
      </CardContent>
    </Card>   :





    
 <Card sx={{ maxWidth: 345, mx: "auto", backgroundColor: (theme) => theme.palette.background.default, color: (theme) => theme.palette.text.primary, }}>
      <CardMedia
        component="img"
        height="180"
        image={item.img}
        alt={item.name}
      />
      <CardContent sx={{color: "text.secondary"}}>
        <Typography gutterBottom variant="h6">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.primary" mb={1}>
          {item.desc}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{color: "text.secondary"}}>
          {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" color="primary" sx={{paddingLeft:"4px"}}>
          Order Now
        </Button>
        <ShoppingBagIcon sx={{ color: "text.primary" }}  />
      </CardActions>
    </Card> }

    </Box>
  );
};

export default AddCard;
