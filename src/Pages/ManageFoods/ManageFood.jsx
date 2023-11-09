import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ManageFood = () => {
    const foods = useLoaderData()
    const [newStatus, setNewStatus] = useState('')
    const { _id, foodName, foodImage, pickupLocation, expireDate, additionalNotes, category } = foods.foods;

    const handleStatus = (e) => {
        e.preventDefault()
        const status = newStatus;

        axios.patch(`https://food-donation-community-server-side.vercel.app/updateStatus/${_id}`, { status })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Succesfully update the status.',
                    });
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            {/* foods image */}
            <section className="flex py-10 flex-col lg:flex-row  font-poppins container mx-auto dark:bg-gray-800 ">
                <div className="justify-center flex-1 container py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <img src={foodImage} alt=""
                                    className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />


                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    {category}
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-blue-400 md:text-5xl dark:text-white">
                                    {foodName}
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Notes: {additionalNotes}
                            </p>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Pick Location: {pickupLocation}
                            </p>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Expire Date: {expireDate}
                            </p>

                        </div>
                    </div>
                </div>
                <div>
                    {/* requester information */}
                    <div>
                        <h3 className="text-3xl font-bold text-center">Who are Request ❓</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            {foods.requests.map(request =>
                                <div key={request._id}
                                    className="bg-[#4878a3] px-8 py-10 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                                    <div className="flex flex-col items-center">
                                        <img src={request.requesterImage} className="w-48 h-48 rounded-full" />
                                        <div className="mt-6 text-center">
                                            <p className="text-base text-gray-400 font-bold uppercase">{request.requesterName}</p>
                                            <h3 className="text-white font-bold text-xl mt-4">{request.requsterEmail}</h3>
                                            <p className="text-base font-medium text-zinc-950">Status: "{foods.foods.status}" </p>
                                        </div>
                                        <div>
                                            <form onSubmit={handleStatus}>
                                                <div className="w-48 flex items-center">
                                                    <select name="status" onChange={(e) => setNewStatus(e.target.value)} className="w-full border  border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500">
                                                        <option value="available">available</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select>
                                                    <button type="submit" className="px-3 py-1 ml-1 bg-white rounded-lg ">Change</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ManageFood;