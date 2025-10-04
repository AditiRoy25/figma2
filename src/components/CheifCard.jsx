import React from "react";
import {
  Box,
  Card,
 
  CardMedia,
  Link,
  Typography,
  
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

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
      <Typography sx={{color:'white',fontSize:'18px'}}>{value?.name}</Typography>
      <Typography>{value?.position}</Typography>
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',margin:'10px'}}>
           <Link sx={{height:'32px',width:'32px',backgroundColor:'#182F31',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}} href={value?.socialLinks?.facebook} color="inherit">
        <FacebookIcon />
      </Link>
            <Link sx={{height:'32px',width:'32px',backgroundColor:'#182F31',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}} href={value?.socialLinks?.x} color="inherit">
        <XIcon />
      </Link>
           <Link sx={{height:'32px',width:'32px',backgroundColor:'#182F31',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}} href={value?.socialLinks?.instagram} color="inherit">
        <InstagramIcon />
      </Link>
           <Link sx={{height:'32px',width:'32px',backgroundColor:'#182F31',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}} href={value?.socialLinks?.linkedin} color="inherit">
        <LinkedInIcon />
      </Link>
      </Box>
    </Card>
  );
}
