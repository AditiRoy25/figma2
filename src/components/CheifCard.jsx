import React from "react";
import {
  Card,
 
  CardMedia,
  
} from "@mui/material";

export default function CheifCard({ value }) {
  if (!value) return null;
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", backgroundColor: (theme) => theme.palette.background.default, color: (theme) => theme.palette.text.primary, }}>
     <CardMedia
        component="img"
        
        image={value.image}
        alt="Paella dish"
        sx={{height:"300px"  ,width:"230px"}}
      />
    </Card>
  );
}
