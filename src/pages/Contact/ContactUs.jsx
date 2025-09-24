// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import Header from "../../components/Header";
// import ContactForm from "../../Form/Contactform";
// import Socialmedia from "../../assets/image/Socail-media.png";
// const ContactUs = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: (theme) => theme.palette.background.default,
//         color: (theme) => theme.palette.text.primary,
//         width: "94%",
//         margin: "auto",
//       }}
//     >
//       <Header
//         screnName={"Home"}
//         title={location.pathname}
//         desc={
//           " Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim."
//         }
//       />

//       <Box
//         textAlign="center"
//         mb={5}
//         sx={{ marginTop: "100px", marginBottom: "100px" }}
//       >
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Contact us
//         </Typography>
//         <Typography
//           variant="body1"
//           maxWidth="600px"
//           mx="auto"
//           mb={3}
//           color="text.primary"
//           sx={{ marginBottom: "30px" }}
//         >
//           Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
//           Facilisis eget cras sit semper sit enim.
//         </Typography>
//       </Box>

//       <Box>
//         <Grid container spacing={2} columns={16}>
//           <Box>
//             <Grid size={8}>
//               <ContactForm />
//             </Grid>
//           </Box>

//           <Box>
//             <Grid
//               size={8}
//               sx={{
//                 backgroundColor: (theme) => theme.palette.navBackground.default,
//                 borderRadius: "8px",
//               }}
//             >
//               <Box>
//                 <Box sx={{ padding: "10px", margin: "30px" }}>
//                   {" "}
//                   <Typography
//                     sx={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       color: (theme) => theme.palette.text.primary,
//                     }}
//                   >
//                     Address:
//                   </Typography>
//                   <Typography variant="body1">
//                     543 Country Club Ave, NC 27587, London, UK +1257 6541120
//                   </Typography>
//                 </Box>
//                 <Box sx={{ padding: "10px", margin: "30px" }}>
//                   {" "}
//                   <Typography
//                     sx={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       color: (theme) => theme.palette.text.primary,
//                     }}
//                   >
//                     Contact:
//                   </Typography>
//                   <Typography variant="body1">
//                     Phone : +91 8348457995
//                   </Typography>{" "}
//                   <Typography variant="body1">
//                     Email : Foodi018@gmail.com
//                   </Typography>
//                 </Box>
//                 <Box sx={{ padding: "10px", margin: "30px" }}>
//                   <Typography
//                     sx={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       color: (theme) => theme.palette.text.primary,
//                     }}
//                   >
//                     Opening Hours:
//                   </Typography>
//                   <Typography variant="body1">
//                     Monday - Friday : 9:00 AM - 10:00 PM
//                   </Typography>
//                   <Typography variant="body1">
//                     Saturday - Sunday : 9:00 AM - 7: 00 PM
//                   </Typography>
//                 </Box>
//                 <Box sx={{ padding: "10px", margin: "30px" }}>
//                   <Typography
//                     sx={{
//                       fontSize: "20px",
//                       fontWeight: 600,
//                       color: (theme) => theme.palette.text.primary,
//                     }}
//                   >
//                     Stay Connected
//                   </Typography>
//                   <img src={Socialmedia} />
//                 </Box>
//               </Box>
//             </Grid>
//           </Box>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default ContactUs;





import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import ContactForm from "../../Form/Contactform";
import Socialmedia from "../../assets/image/Socail-media.png";

const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        width: "100%",
        margin: "auto",
        padding:"20px"
      }}
    >
      
      <Header
        screnName={"Home"}
        title={location.pathname}
        desc={
          "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim."
        }
      />

     
      <Box textAlign="center" mb={8}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact us
        </Typography>
        <Typography
          variant="body1"
          maxWidth="600px"
          mx="auto"
          color="text.primary"
        >
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget cras sit semper sit enim.
        </Typography>
      </Box>

     
      <Grid container spacing={4}>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{color: (theme) => theme.palette.text.primary,fontSize: "20px",
                fontWeight: 600,
                mb: 1,}}>Get in Touch</Typography>
          <Typography  variant="body1" sx={{marginBottom:"50px"}}> Your email address will not be published, Required fields are marked</Typography>
          <ContactForm />
        </Grid>

        
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: (theme) => theme.palette.navBackground.default,
            borderRadius: "16px",
            p: 4,
          }}
        >
         
          <Box mb={5}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mb: 1,
                color: (theme) => theme.palette.text.primary
              }}
            >
              Address :
            </Typography>
            <Typography variant="body1">
              543 Country Club Ave, NC 27587, London, UK +1257 6541120
            </Typography>
          </Box>

          
          <Box mb={5}>
            <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: 1,color: (theme) => theme.palette.text.primary }}>
              Contact :
            </Typography>
            <Typography variant="body1">Phone : +91 8348457995</Typography>
            <Typography variant="body1">Email : Foodi018@gmail.com</Typography>
          </Box>

          
          <Box mb={5}>
            <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: 1,color: (theme) => theme.palette.text.primary }}>
              Opening Hours :
            </Typography>
            <Typography variant="body1">
              Monday - Friday : 9:00 AM - 10:00 PM
            </Typography>
            <Typography variant="body1">
              Saturday - Sunday : 9:00 AM - 7:00 PM
            </Typography>
          </Box>

          
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 600, mb: 2 ,color: (theme) => theme.palette.text.primary}}>
              Stay Connected :
            </Typography>
            <Box display="flex" gap={2}>
              <img src={Socialmedia} alt="social media icons" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;

