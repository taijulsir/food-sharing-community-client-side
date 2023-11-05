import { useLoaderData } from "react-router-dom";
import AvailableBanners from "./AvailableBanners";
import AvailableCards from "./AvailableCards";


const AvailableFoods = () => {
    const availableFoods= useLoaderData()
    return (
        <div>
           <AvailableBanners></AvailableBanners>
           <section className="flex items-center  font-poppins dark:bg-gray-900 my-16 ">
                <div className="justify-center max-w-7xl px-4 py-4 mx-auto lg:py-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {
                         availableFoods.map(food=> <AvailableCards key={food._id} food={food}></AvailableCards> )  
                        }

                    </div>
                </div>
            </section >
        </div>
    );
};

export default AvailableFoods;