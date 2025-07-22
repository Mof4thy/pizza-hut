import deal from "../assets/hot-deals.jpg"

import deal2 from "../assets/deal2.jpg"
import deal3 from "../assets/deal3.jpg"
import deal4 from "../assets/deal4.webp"

const HotDeals = ()=>{

    return(

        <>
        <div className=" flex flex-col gap-4 sm:gap-10">
            <h2 className="self-center text-2xl  md:text-4xl  xl:text-6xl  font-bold text-Primary-Red underline">Hot Deals</h2>

            <div className="flex overflow-x-auto space-x-8 px-4 pb-4 scroll-smooth snap-x snap-mandatory">
                {[deal, deal2, deal3, deal4].map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`pizza offer ${index + 1}`}
                    className="snap-center min-w-[300px]  object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
                />
                ))}
            </div>

        </div>
        </>

    );


}

export default HotDeals