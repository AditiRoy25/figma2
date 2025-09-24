import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  useTheme,
} from "@mui/material";``
import { FaUser, FaCalendarAlt, FaComments } from "react-icons/fa";

// import ForumIcon from '@mui/icons-material/Forum';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
export default function BlogCard({ value }) {
  const theme = useTheme();
  if (!value) return null;

  return (
    <Card sx={{ maxWidth: 345, mx: "auto", backgroundColor: (theme) => theme.palette.background.default, color: (theme) => theme.palette.text.primary, }}>
      <CardMedia
        component="img"
        height="180"
        sx={{ width: "100%", borderRadius: "12px" }}
        image={value.image}
        alt={value.name}
      />
      <CardContent >

        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"start",
          gap: 3,
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FaUser size={8}  color={theme.palette.text.secondary} />
          <Typography variant="body2">{value.author}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FaCalendarAlt size={8} color={theme.palette.text.secondary}/>
          <Typography variant="body2">{value.date}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FaComments size={8} color={theme.palette.text.secondary} />
          <Typography variant="body2">{value.comments}</Typography>
        </Box>
      </Box>
       
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" ,marginLeft:"0px", justifyContent:"start",display:"flex"}}>
        {value.name}
      </Typography>

      
      <Typography variant="body2" sx={{ mt: 1, color: "#aaa" ,marginLeft:"0px", justifyContent:"start",display:"flex"}}>
        {value.desc}
      </Typography>

        
        
      </CardContent>
      <CardActions >
        <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{
          mt: 2,
          fontSize: "0.9rem",
          fontWeight: "bold",
          cursor: "pointer",
          textTransform: "uppercase",
           justifyContent:"start",display:"flex",
           padding:"8px"
        }}>
          {value.cap}
        </Typography>
      </CardActions>
    </Card>
  );
}
