import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Casual T-shirt",
    price: 100,
    category: "Gadgets",
    image:
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A comfortable and stylish casual T-shirt made from high-quality cotton, perfect for daily wear and outdoor activities.",
    rating: 4.5,
    stock: 25,
    brand: "UrbanWear",
    tags: ["casual", "cotton", "summer"],
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 200,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A sleek smartwatch with multiple fitness tracking features, heart rate monitor, and customizable watch faces to match your style.",
    rating: 4.8,
    stock: 15,
    brand: "TechTime",
    tags: ["fitness", "smartwatch", "wearable"],
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 150,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A smart home hub that connects all your smart devices in one place, enabling voice control, automation, and remote monitoring.",
    rating: 4.7,
    stock: 10,
    brand: "HomeSmart",
    tags: ["smart home", "automation", "IoT"],
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProducts: (state, action) => {
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload,
      });
    },
  },
});
export const { addToProducts } = productsSlice.actions;
export default productsSlice.reducer;
