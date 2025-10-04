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
  const { categories } = useContext(CategoryContext); // ✅ get dynamic categories
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
    let base64img = await toBase64(data.image);
    const latestData = {
      title: data.title,
      description: data.description,
      category: data.category,
      price: data.price,
      image: base64img,
    };

    try {
      await api.post("/products", latestData);
      toast.success("Product Added Successfully!");
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

      {/* 👇 Dynamic Category Dropdown */}
     <DynamicDropdown
        name="category"
        label="Category"
        control={control}
        errors={errors}
        options={categories} 
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
  );
};

export default AddProduct;
