import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import s1 from "../../assets/SingleImg/s1.png";
import { FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";
import ss1 from "../../assets/SingleImg/ss1.png";
import ss2 from "../../assets/SingleImg/ss2.png";
import ss3 from "../../assets/SingleImg/ss3.png";
import burger from "../../assets/SingleImg/burger.png";
import lc1 from "../../assets/SingleImg/lc1.png";
import lc2 from "../../assets/SingleImg/lc2.png";
import lc3 from "../../assets/SingleImg/lc3.png";
import SingleForm from "../../Form/SingleForm";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import ReplyIcon from '@mui/icons-material/Reply';
const SingleBlog = () => {
  const theme = useTheme();
   const location=useLocation()
  const categories = [
    { name: "Hamburger", count: 20 },
    { name: "Pizza", count: 6 },
    { name: "Cold Drink", count: 8 },
    { name: "Hot Drink", count: 2 },
    { name: "Pasta", count: 5 },
  ];
  const cart = [
    {
      id: 1,
      image: ss1,
      name: "Fruit Cake",
    },
    {
      id: 2,
      name: "Healty salad",

      image: ss2,
    },
    {
      id: 3,
      name: "Blueberry ice cream",
      image: ss3,
    },
  ];
  const leftCard = [
    {
      id: 1,
      image: lc1,
      name: "Leslie Alexander",
      desc: "Lorem Ipsum is simply dummy text.",
      date: "15June2025",
    },
    {
      id: 2,
      name: "Theresa Webb",
      desc: "Lorem Ipsum is simply dummy text.",
      date: "20Augest2025",
      image: lc2,
    },
    {
      id: 3,
      name: "Kristin",
      desc: "Lorem Ipsum is simply dummy text.",
      date: "18July2025",
      image: lc3,
    },
  ];
  return (
    <Box   sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        // width: "94%",
        // margin: "auto",
      }}>
 <Header screnName={"Home"} title={location.pathname} desc={" Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.Facilisis eget cras sit semper sit enim."}/>

      <Box
        textAlign="center"
        mb={5}
        sx={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
        Single Blog
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
        </Box>
      
    <div style={{ backgroundColor: "#121212",paddingTop:"50px" }}>
      
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 3, md: 10 }}
        sx={{ width: "80%", margin: "auto" }}
      >
        <Grid size={6}>
          {/* /////////////////////////left card//////////////////////// */}

          <Card>
            <CardMedia
              sx={{ height: "350px", width: "auto" }}
              image={s1}
              title="green iguana"
            />
            <CardContent
              sx={{
                backgroundColor: "#121212",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              {/* /////////////////////////////leftcard under icon//////////////////////////// */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "theme.",
                }}
              >
                <FaUser size={8} color={theme.palette.text.secondary} />
                <Typography variant="body2">Admin</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaCalendarAlt size={8} color={theme.palette.text.secondary} />
                <Typography variant="body2">17June2025</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FaComments size={8} color={theme.palette.text.secondary} />
                <Typography variant="body2">Comments</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* //////////////////////////////////////////////////Right list//////////////////////////////////// */}

        <Grid size={6}>
          <Box
            sx={{
              width: "400px",
              height: "400px",
              borderRadius: 2,
              border: "1px solid orange",
              p: 2,
              backgroundColor: "#121212",
              color: "white",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>
              Categories
            </Typography>

            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#1a1a1a",
                borderRadius: 2,
                p: 1,
                width:"350px",
                height:"300px"
              }}
            >
              <List disablePadding>
                {categories.map((category) => (
                  <ListItem key={category.name} sx={{ px: 1, py: 0.5 }}>
                    <ListItemText primary={category.name} />
                    <Typography sx={{ fontWeight: 600 }}>
                      ({category.count})
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Grid>
        {/* ///////////////////////////////////////////left para/////////////////// */}

        <Grid size={6}>
          <Typography variant="h3">10 Benefits of Doing a Detox</Typography>
          <br></br>
          <Typography variant="body1">
            Enthusiastically aggregate ethical systems for standardized
            mindshare. Energistically target resource maximizing leadership
            skills without backward-compatible action items. Credibly impact
            alternative expertise vis-a-vis economically sound results.
            Dynamically synergize empowered benefits through functional
            partnerships.
          </Typography>
          <br></br>
          <Typography variant="body1">
            Assertively recaptiualize interdependent alignments via backend
            leadership skills. Monotonectally formulate focused quality vectors
            whereas proactive infomediaries.
          </Typography>
          <br></br>
          <Typography
            variant="body1"
            sx={{
              padding: "40px",
              backgroundColor: "#1a1a1a",
              borderRadius: "15px",
              marginBottom: "50px",
            }}
          >
            Continually whiteboard enterprise-wide vortals whereas world-class
            resources. Quickly brand team building services via functionalized
            users.<br></br> -----Sayan Halder
          </Typography>

          {/* ///////////////////////////////////////////left cards/////////////////////////////// */}

          <Typography variant="h3" sx={{ marginBottom: "50px" }}>
            Comments(03)
          </Typography>

          {leftCard.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                backgroundColor: "#1a1a1a",
                marginBottom: "20px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: "80px", height: "80px", margin: "20px" }}
                image={item.image}
                alt="Live from space album cover"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#1a1a1a",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    sx={{ fontSize: "20px", color: "#ffffff" }}
                  >
                    <FaCalendarAlt
                      size={18}
                      color={theme.palette.text.secondary}
                    />
                    {item.date}
                  </Typography>
                  <Typography
                    component="div"
                    sx={{ fontSize: "20px", color: "#ffffff" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
<ReplyIcon  sx={{ color: "text.secondary" }}/>
                  <Button>Reply</Button>
                </CardActions>
              </Box>
            </Card>
          ))}
          {/* ..............................................form...................... */}
          <SingleForm />
        </Grid>
        {/* .................................Right cardss................... */}

        <Grid size={6}>
          <Typography variant="h3" my={5}>Recent Post</Typography>
          <Typography variant="h3">Margarita pizza</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "theme.",
            }}
          >
            <FaUser size={8} color={theme.palette.text.secondary} />
            <Typography variant="body2">Admin</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaCalendarAlt size={8} color={theme.palette.text.secondary} />
            <Typography variant="body2">17June2025</Typography>
          </Box>

          {/* ................................................card start....................... */}
          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                backgroundColor: (theme) => theme.palette.background.default,
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={item.image}
                alt="Live from space album cover"
              />
              <CardContent
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h3">{item.name}</Typography>
                <Box sx={{display:"flex",flexDirection:"row" ,gap:"5px"}}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: "theme.",
                    }}
                  >
                    <FaUser size={8} color={theme.palette.text.secondary} />
                    <Typography variant="body2">Admin</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FaCalendarAlt
                      size={8}
                      color={theme.palette.text.secondary}
                    />
                    <Typography variant="body2">17June2025</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FaComments size={8} color={theme.palette.text.secondary} />
                    <Typography variant="body2">Comments</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
          {/* ................................button........................... */}
          <Typography
            variant="h3"
            sx={{ marginTop: "50px", marginBottom: "50px" }}
          >
            Product Tag
          </Typography>
          <Box
            sx={{
              backgroundColor: "#121212",
              color: "white",
              gap: "10px",
              marginBottom: "50px",
            }}
          >
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Palak Panner
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Pau Bhaji
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Dahi bara
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Malay Kofta
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Dal Tadka
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Mix veg
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Vara Pau
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              sikh Kebab
            </Button>
            <Button
              sx={{ border: "1px solid white", color: "white", margin: "20px" }}
            >
              Fuchka
            </Button>
          </Box>
          {/* ...............................burger img..................... */}
          <img src={burger} style={{width:"300px",height:"300px"}}/>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
};

export default SingleBlog;
