/* eslint-disable no-unused-vars */
import { useState } from "react";
import AuthHook from "../../CustomHooks/AuthHook";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const FoodRequest = () => {
    const { user } = AuthHook()
    const [foods, setFoods] = useState([])
    const url = `https://food-donation-community-server-side.vercel.app/requestedFoods?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(res => setFoods(res.data))
            .catch(error => console.log(error))
    }, [url])

    console.log(foods)
    if( foods.length===0){
        return <div className="text-center text-blue-700 ">Please Donate Food to see your donate food list</div>
    } 
    console.log(foods.status)
    return (
        <div>
              <Helmet>
                <title>My Food Request Item</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-10">
                {foods.map(food =>
                     <section key={food._id} className="flex items-center py-10 bg-stone-100 font-poppins dark:bg-gray-800 ">
                    <div className=" py-4  lg:py-6 md:px-6">
                        <div className="flex flex-wrap ">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative">
                                    <img src={food.foodImage} alt=""
                                        className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                  
                                </div>
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                                <div className="relative">
                                   
                                    <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                       {food.foodName}
                                    </h1>
                                </div>
                                <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                   {food.additionalNotes}
                                </p>
                                <p className="text-xl font-medium text-zinc-950">Donated By:</p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Name: {food.donatorName}
                                </p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Pickup : {food.pickupLocation}
                                </p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Expire Date: {food.expireDate}
                                </p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Request Date: {food.requestedDate}
                                </p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Status: {food.status}
                                </p>
                                <p className="mt-2 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                 Donation Money: {food.donationMOney}
                                </p>

                                <a href="#"
                                    className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                    Pick Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>)}
            </div>
        </div>
    );
};

export default FoodRequest;