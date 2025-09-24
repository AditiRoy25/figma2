import { Box, Modal } from "@mui/material";

import Login from "../pages/Login";

const LoginModal = ({ open, handleClose,navScreen }) => {
  console.log("open",open)
  
  return (
    <div>
      <Modal
        open={open}
        onClose={()=>handleClose()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
       
      >
<Login navScreen={navScreen} onClose={handleClose}/>
    </Modal>
    </div>
  );
};

export default LoginModal;
