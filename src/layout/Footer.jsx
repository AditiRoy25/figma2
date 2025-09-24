import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/image/Logo.png";
import Socialmedia from "../assets/image/Socail-media.png"
// import frame from "../assets/image/frame.png"
function Footer() {
  return (
    <div style={{width:"90%" ,margin:"auto" ,marginTop:"50px"}}>
    
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <img src={Logo} alt="logo" height="41px" width="108.89px" />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolorum, blanditiis pariatur quaerat harum quisquam, error
            architecto veniam dolore modi consequuntur at eligendi! Dicta
            quaerat ipsum quam aut quis eum optio omnis? Quo aliquid quisquam.
          </Typography>
 <img src={Socialmedia}/>
          <div></div>
        </Grid>
        <Grid size={3}>
          <Typography sx={{fontSize:"20px", fontWeight:600}}>Contact Us</Typography>
          <Typography>aditiroyinfo@gmail.com</Typography>
          <Typography>+9178532147</Typography>
         
        </Grid>
        <Grid size={3} sx={{ width: "195px", height: "160px" }}>
          <Typography sx={{fontSize:"20px", fontWeight:600}}>User Link</Typography>
          <Typography>About us</Typography>

          <Typography>Contact Us</Typography>
          <Typography>Order delivery</Typography>
          <Typography>Payments & tax</Typography>
          <Typography>Terms and Service</Typography>

        </Grid>
        <Grid size={3} sx={{ height: "90px", width: "219px" }}>
          <Typography sx={{fontSize:"20px", fontWeight:600}}>Location</Typography>
          <Typography>
            543 Country Club Ave, NC 27587, London, UK +1257 6541120
          </Typography>
          {/* <img src={frame}/> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
