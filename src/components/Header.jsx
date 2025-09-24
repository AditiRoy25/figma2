import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = ({screnName,title,desc}) => {

  return (
     <Box
            textAlign="center"
            mb={5}
            sx={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {screnName}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="text.secondary"
                sx={{ marginTop: "-10px" }}
              >
                {title}
              </Typography>
            </div>
    
            <Typography
              variant="body1"
              maxWidth="600px"
              mx="auto"
              mb={3}
              color="text.primary"
              sx={{ marginBottom: "30px" }}
            >
            {desc}
            </Typography>
          </Box>
  )
}

export default Header