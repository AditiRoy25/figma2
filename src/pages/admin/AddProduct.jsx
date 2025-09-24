import { Typography, Box, Button, MenuItem, InputLabel } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import Dynamicinput from "../../Components/Dynamicinput";
import { toBase64 } from "../../hooks/utils/helper";
// import axios from "axios";
 
import api from "../../Api/Api";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Product name is required")
    .matches(/^[A-Za-z0-9\s]+$/, "Only letters, numbers & spaces allowed"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description should be at least 10 characters"),
  category: yup.string().required("Category is required"),
});

const AddProduct = () => {
  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    // let base64img ="";
    // if(data.image.length> 0){
    let base64img = await toBase64(data.image);
    // }
    console.log(base64img);
    const latestData = {
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      image: base64img,
    };
    try {
      await api.post("/products", latestData);
      toast.success("Added");
      reset();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: "#60b1ebff",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Dynamicinput
          name="title"
          label="Product Name"
          control={control}
          errors={errors}
        />

        <Dynamicinput
          name="description"
          label="Description"
          control={control}
          errors={errors}
          multiline
          rows={3}
        />
        <Dynamicinput
          name="category"
          label="Catrgory"
          control={control}
          errors={errors}
        />
        <Dynamicinput
          name="price"
          label="Price"
          control={control}
          errors={errors}
        />

        <Box sx={{ mt: 2 }}>
          <InputLabel>Product Image</InputLabel>
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
    </>
  );
};

export default AddProduct;
