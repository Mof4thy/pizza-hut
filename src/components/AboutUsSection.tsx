import about2 from '../assets/about.jpg'
import about from '../assets/about-2.jpg'

const AboutUsSection = () => {
    return(
        <div className="about-us-section flex flex-col justify-center items-center gap-12 py-10">

            <div className="flex flex-col gap-12 text-center text-Dark-Accent">
                <p className="text-2xl md:text-4xl font-bold">Learn More About Us</p>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12  ">
                    <div className="flex flex-col justify-between col-span-3 gap-4 h-full">
                        <img src={about} alt="about" className="w-full flex-1  lg:max-h-140 object-cover rounded-2xl" />
                        <div className='w-full p-4 flex flex-col justify-center items-center border-2 rounded-2xl text-lg md:text-xl lg:text-2xl font-bold'>
                            <h2 className='font-bold text-Dark-Accent'>Book a Table</h2>
                            <h2 className='text-Primary-Red font-bold'>+02 01151166655</h2>
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col justify-start gap-4 text-start text-sm md:text-md lg:text-lg ">
                        <p className='leading-relaxed'>At Pizza Haven, we're more than just a pizzeria. We’re a passionate team of food lovers, dough-tossers, and flavor chasers who believe that great pizza brings people together. Whether you're a fan of the classics or crave bold, creative toppings, we've got something fresh and delicious for everyone.</p>
                        <ul className='list-disc list-outside text-start ml-4 marker:text-Primary-Red space-y-2'>
                            <li>Quality First: We never cut corners on taste or ingredients..</li>
                            <li>Customer Happiness: You’re not just a guest – you're family.</li>
                            <li>Community Focused: We support local causes and celebrate local flavors.</li>
                        </ul>
                        <p className='leading-relaxed'>To serve exceptional pizza that brings joy to every table and creates memories that last a lifetime.

Whether you dine in, take out, or order online — Pizza Haven is here to satisfy your cravings, one perfect slice at a time.

</p>
                        <img src={about2} alt="about" className="w-full object-cover rounded-xl" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUsSection;