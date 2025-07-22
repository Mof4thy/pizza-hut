import pizza from '../assets/Top-View-Pizza-Transparent-File.png'

const HeroSection= ()=>{

    return(
        <>
        <div className='min-h-screen flex  w-full lg:justify-between '>
            <div className=' flex flex-col-reverse sm:flex-row items-center  gap-10 '>

                <div className='flex flex-col gap-4  text-Dark-Accent'>

                    <h1 className=' text-2xl  md:text-4xl  xl:text-6xl font-bold '>Enjoy Your <br/> Delicious Pizza</h1>
                    <p className=' text-sm  md:text-md xl:text-xl '>
                        Pizza Hut is a pizza restaurant that offers a variety of pizzas and other Italian dishes.
                    </p>

                    <button className='bg-Primary-Red text-Background-Neutral w-fit px-4 py-1 md:px-6 md:py-2 text-sm md:text-lg rounded-md hover:bg-Warm-Accent hover:text-Dark-Accent transition-all duration-300 cursor-pointer'>Order Now</button>
                
                </div>

                <div className='flex items-center justify-center sm:justify-end'>
                    <img src={pizza} className=' w-10/14 self-end' alt="pizza" />
                </div>

            </div>            
        </div>
        </>
    )

}

export default HeroSection;