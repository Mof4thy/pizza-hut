import HeroSection from "../components/HeroSection";
import HotDeals from "../components/HotDeals";
const Home= ()=>{

return(
    <>
        <div className=" flex flex-col gap-10 sm:gap-0">
            <HeroSection/>

            <HotDeals/>
            
        </div>


    </>
)

}

export default Home;