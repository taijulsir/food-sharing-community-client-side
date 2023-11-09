/* eslint-disable no-unused-vars */
import { useState } from "react";
import AuthHook from "../../CustomHooks/AuthHook";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import nodata from "../../Lottie/nodata - 1699457305397.json"


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
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://food-donation-community-server-side.vercel.app/requestedFoods/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingFoods = foods.filter(food => food._id !== id)
                            setFoods(remainingFoods)
                          
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });

    }

    if( foods.length===0){
        return <div className="max-w-5xl mx-auto "><Lottie
        animationData={nodata}
        options={defaultOptions}
        height={400}
        width={400}>
    </Lottie></div>
    } 
  
    
    return (
        <div>
              <Helmet>
                <title>My Food Request Item</title>
            </Helmet>
            <h1 className="text-3xl text-center font-bold mt-8">All of My Food Request</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-10">
                {foods.map(food =>
                     <section key={food._id} className="flex items-center py-10 shadow-xl bg-teal-900/70 font-poppins rounded-lg dark:bg-gray-800 ">
                    <div className=" py-4  lg:py-6 md:px-6">
                        <div className="flex flex-wrap ">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative">
                                    <img src={food.foodImage} alt=""
                                        className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                  
                                </div>
                            </div>
                            <div className="w-full px-4 mb-3 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    {food.category}
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                    {food.foodName}
                                </h1>
                            </div>
                                <p className="mt-6 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                   {food.additionalNotes}
                                </p>
                                <p className="text-xl font-medium text-zinc-950">Donated By:</p>
                                <p className="mt-2 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                 Name: {food.donatorName}
                                </p>
                                <p className="mt-2 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                 Pickup : {food.pickupLocation}
                                </p>
                                <p className="mt-2 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                 Expire Date: {food.expireDate}
                                </p>
                                <p className="mt-2 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                 Request Date: {food.requestedDate}
                                </p>
                                <p className="mt-2 mb-2 text-base leading-7 text-white dark:text-gray-400">
                                 Status: {food.status}
                                </p>
                                <p className="mt-2 mb-3 text-base leading-7 text-white dark:text-gray-400">
                                 Donation Money: $ {food.donationMOney}
                                </p>

                                <button
                                onClick={()=>handleDelete(food._id)}
                                    className="px-4 py-3 text-gray-50 transition-all transform bg-teal-600 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </section>)}
            </div>
        </div>
    );
};

export default FoodRequest;