import { type MenuItem } from "../types/MenuItem";
import Button from "./Button";


const MenuItemCard = ({name , price, image, description}: MenuItem) => {

    return(
        <>
            <div className="menu-item flex flex-col justify-center items-center  rounded-2xl shadow-lg hover:shadow-Primary-Red transition-all duration-300  bg-white ">
                
                <div className="flex  justify-center items-center w-full h-60 rounded-t-2xl ">
                    <img src={image} alt={name} className="w-full rounded-t-2xl h-60 object-cover" />
                </div>

                <div className="flex flex-col justify-center items-center gap-6 py-4 px-4 w-full">
               
                    <h3 className="text-2xl font-bold text-center text-Dark-Accent">{name}</h3>

                    <p className="text-sm text-gray-500">{description}</p>
                   
                    <div className="flex justify-between items-center w-full">
                        <p className="text-xl font-bold text-Primary-Red">{price}$</p>
                        <Button classname="" onclick={()=>{}}>Add to Cart</Button>
                    </div>
               
                </div>
                
            </div>

        </>
    
    );

}

export default MenuItemCard;