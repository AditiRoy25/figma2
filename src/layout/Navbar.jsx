import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/image/Logo.png";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import Cookies from "js-cookie";
import { useEffect } from "react";
import CartContext from "../hooks/context/cart/CreatecartContext";
import api from "../Api/Api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WishContext from "../hooks/context/WishlistList/CreateWishContex";
import AuthContext from "../hooks/context/Auth/CreateAuthContext";

export default function Navbar() {
   const { user, logout } = useContext(AuthContext);
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { cart } = useContext(CartContext);
  const { wishCount } = useContext(WishContext)
  const [loginData, setLoginData] = useState(null);
  const [navScreen, setNavScreen] = useState("/");
  const [cartCount, setCartCount] = useState(0);
  

  useEffect(() => {
    const data = Cookies.get("loginData");
    setLoginData(data);
    console.log("loginData", data);
  }, []);

  useEffect(() => {
        const fetchdata = async () => {
      try {
        const res = await api.get(`/cart`);

        const totalCount = res?.data?.reduce(
          (sum, item) => sum + item.count,
          0
        );
        setCartCount(totalCount);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchdata();
  }, [cart]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: (theme) => theme.palette.navBackground.default,
          color: (theme) => theme.palette.text.primary,
          width: "80%",
          height: "87px",
          borderRadius: "20px",
          px: 5,
          py: 2,
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src={Logo} alt="logo" height="41px" width="108.89px" />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/");
              }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/OurMenu");
              }}
            >
              Menu
            </Typography>
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/AboutUs");
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/OurChef");
              }}
            >
              Chef
            </Typography>
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/OurBlog");
              }}
            >
              Blog
            </Typography>
            <Typography
              variant="h6"
              onClick={() => {
                navigation("/ContactUs");
              }}
            >
              Contact
            </Typography>
          </Box>

          {/* <Box
            sx={{
              justifyContent: "space-evenly",
              display: "flex",
              alignItems: "center",
              margin: "5px",
            }}
          > */}
            {/* <Box
              onClick={() => {
                navigation("/AddToCard":handleClose());
              }}
            > */}
 <Box sx={{ display: "flex", alignItems: "center" }}>
            
           
            <Box sx={{ position: "relative", marginRight: "20px" }}>
              <FavoriteIcon sx={{ color: "text.secondary" }} />
              {wishCount > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      fontSize: "12px",
                    }}
                  >
                    {wishCount}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box
              onClick={() => {
               
                if (loginData) {
                  navigation("/AddToCard");
                } else {
                  setNavScreen("/AddToCard");
                  setOpen(true);
                }
              }}
              sx={{position:'relative',marginRight:'20px'}}
            >

              <ShoppingBagIcon sx={{ color: "text.primary",width:'24px' }} />
              {cartCount > 0 ?
              <Box sx={{position:'absolute',top:'-5px',right:'-10px',width:'20px',height:'20px',borderRadius:'50%', backgroundColor: (theme) => theme.palette.primary.main,alignItems:'center',justifyContent:'center',display:'flex'}}>
                <Typography sx={{color: (theme) => theme.palette.text.primary,fontSize:'12px'}}>{cartCount}</Typography>
              </Box>
              :null}
            </Box>
            {!loginData ? (
              <Button
                sx={{
                  height: "38px",
                  width: "70px",
                  borderRadius: "8px",
                  padding: " 15px 20px 15px 20px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.text.primary,
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                LOGIN
              </Button>
            ) : (
              <Button
                sx={{
                  height: "38px",
                  width: "70px",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.text.primary,
                }}
                onClick={() => {
                  Cookies.remove("loginData");
                  setLoginData(null);
                  logout()
                  navigation("/");
                }}
              >
                LOGOUT
              </Button>
            )}
            {user?.email =="aditiroyinfo.2016@gmail.com" && (
               <Button
              sx={{
                height: "38px",
                width: "70px",
                borderRadius: "8px",
                marginLeft:'5px',
                padding: " 15px 20px 15px 20px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.text.primary,
              }}
              onClick={() => navigation("/admin/dashboard")}
            >
              admin
            </Button>
            )}
          
          </Box>
          <LoginModal
            open={open}
            handleClose={handleClose}
            navScreen={navScreen}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
