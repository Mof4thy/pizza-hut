import { useEffect, useState } from "react";
import Button from "../components/Button";
import MenuHeader from "../components/MenuHeader";
import MenuItemCard from "../components/MenuItemCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // make sure this points to your Firebase config
import type { MenuItem } from "../types/MenuItem";
    
const Menu= ()=>{

    const [items, setItems] = useState<MenuItem[]>([]);
    const [category, setCategory] = useState<string>("All");
    const categories = ["All", "Pizza", "Pasta", "Appetizer" , "Dessert"];

    useEffect(() => {
        const fetchMenuItems = async () => {
          const snapshot = await getDocs(collection(db, "menu"));
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as MenuItem[];
    
          setItems(data);
          console.log(data);
        };
    
        fetchMenuItems();
      }, []);


    const filteredItems = items.filter((item)=>{
        if(category === "All"){
            return item;
        }
        return item.category === category;
    })

    return(
        <>
            

            <div className="flex flex-col gap-12  text-center py-10">
                <MenuHeader/>

                <div className="categories flex flex-wrap gap-8 justify-center">
                    {categories.map((category, index) => (
                        <Button key={index} classname="bg-Primary-Red text-Background-Neutral px-4 py-2 rounded-md" onclick={()=>{setCategory(category)}}>{category}</Button>
                    ))}
                </div>

                <div className="menu-items  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
                
                {filteredItems && filteredItems.map((item)=>{
                    return(
                        <MenuItemCard key={item.id} name={item.name} price={item.price} image={item.image} description={item.description} category={item.category} />
                    )
                })}

                    
                </div>

            </div>
        </>
    )

}

export default Menu;