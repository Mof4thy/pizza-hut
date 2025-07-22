import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // make sure this points to your Firebase config
import { Menu, Upload } from "lucide-react";

const UploadMenuData = () => {
  const menuItems = [
    {
      name: "Chocolate Lava Cake",
      description: "Warm cake with a gooey chocolate center",
      price: 4.99,
      image: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
      category: "Dessert"
    },
    {
      name: "Cinnamon Rolls",
      description: "Soft rolls with cinnamon filling and icing",
      price: 3.99,
      image: "https://www.allrecipes.com/thmb/MjuSC7L1sNlk8UDrddQZ8g-z1fI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/275744-homemade-cinnamon-rolls-VAT-006-4x3-04singlerollmoreicing-b9dad55293644d4bb576d7ca649e2043.jpg",
      category: "Dessert"
    }    
  ];

  const uploadMenuItems = async () => {
    const menuCollection = collection(db, "menu");
    try {
      for (const item of menuItems) {
        await addDoc(menuCollection, item);
      }
      alert("Menu items uploaded successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upload Menu Items</h1>
      <button
        onClick={uploadMenuItems}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Upload Menu
      </button>
    </div>
  );
};

export default UploadMenuData;
        