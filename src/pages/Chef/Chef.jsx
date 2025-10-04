import React, { useContext } from "react";

import chef1 from "../../assets/chef/chef1.png";
import chef2 from "../../assets/chef/chef2.png";
import chef3 from "../../assets/chef/chef3.png";
import chef4 from "../../assets/chef/chef4.png";
import chef5 from "../../assets/chef/chef5.png";
import chef6 from "../../assets/chef/chef6.png";
import chef7 from "../../assets/chef/chef7.png";
import chef8 from "../../assets/chef/chef8.png";
import chef9 from "../../assets/chef/chef9.png";
import chef10 from "../../assets/chef/chef10.png";
import chef11 from "../../assets/chef/chef11.png";
import chef12 from "../../assets/chef/chef12.png";
import { Box, Grid, Typography } from "@mui/material";
import MenuCard from "../../components/MenuCard";
import CheifCard from "../../components/CheifCard";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import ChefContext from "../../hooks/context/chef/ChefContext";

const chefImg = [
  { id: 1, image: chef1 },
  { id: 2, image: chef2 },
  { id: 3, image: chef3 },
  { id: 4, image: chef4 },
  { id: 5, image: chef5 },
  { id: 6, image: chef6 },
  { id: 7, image: chef7 },
  { id: 8, image: chef8 },
  { id: 9, image: chef9 },
  { id: 10, image: chef10 },
  { id: 11, image: chef11 },
  { id: 12, image: chef12 },
];
const Chef = () => {
    const location=useLocation()
    const { chefData } = useContext(ChefContext);
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
          Our World Class Chef
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

        <Grid container columns={12} spacing={5}>
          {chefData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <CheifCard  value={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Chef;
