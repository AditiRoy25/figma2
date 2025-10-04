import { Typography, Box, Button, InputLabel } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import Dynamicinput from "../../Components/Dynamicinput";
import { toBase64 } from "../../hooks/utils/helper";
import api from "../../Api/Api";
import { useContext } from "react";
import CategoryContext from "../../hooks/context/category/CategoryContext";
import DynamicDropdown from "../../components/DynamicDropdown";
import ChefContext from "../../hooks/context/chef/ChefContext";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Chef name is required"),
  position: yup.string().required("Category is required"),
});

const Addchef = () => {
  const { chefPosition } = useContext(ChefContext); // ✅ get dynamic categories
  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      position: '',
      image: '',
      socialLinks:{facebook:'',x:'',instagram:'',linkedin:''},
    },
  });
  const onSubmit = async (data) => {
    let base64img = await toBase64(data.image);
    const latestData = {
      name: data.name,
      position: data.position,
      image: base64img,
      socialLinks:{facebook:data.facebook,x:data.twitter,instagram:data.instagram,linkedin:data.linkedin},
    };

    try {
      await api.post("/chef", latestData);
      toast.success("Chef Added Successfully!");
      reset();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        backgroundColor: "#c47130b0",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 4,
        borderRadius:'12px'
      }}
    >
      <Dynamicinput
        name="name"
        label="Chef Name"
        control={control}
        errors={errors}
      />

     <DynamicDropdown
        name="position"
        label="Position"
        control={control}
        errors={errors}
        options={chefPosition} 
      />

      <Dynamicinput
        name="facebook"
        label="Facebook"
        control={control}
        errors={errors}
      />
      <Dynamicinput
        name="twitter"
        label="Twitter"
        control={control}
        errors={errors}
      />
      <Dynamicinput
        name="instagram"
        label="Instagram"
        control={control}
        errors={errors}
      />
      <Dynamicinput
        name="linkedin"
        label="LinkedIn"
        control={control}
        errors={errors}
      />


      <Box sx={{ mt: 2 }}>
        <InputLabel>Chef Image</InputLabel>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setValue("image", file);
          }}
        />
      </Box>

      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default Addchef;
