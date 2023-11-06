/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import AuthHook from "../../CustomHooks/AuthHook";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FoodModal = ({ food }) => {
    const { user } = AuthHook()
    const { _id, foodName, foodId, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorDesignation, donatorEmail } = food;
    const [requestedDate, setRequestedDate] = useState("")
    const [requesterName,setRequesterName] = useState(user?.displayName)
    const [requesterImage,setRequesterImage] = useState(user?.photoURL)
    const [requsterEmail,setRequesterEmail] = useState(user?.email)

    // current time
    useEffect(() => {
        const currentDate = new Date();
        const date = currentDate.toLocaleString()
        setRequestedDate(date)
    }, [])

// Handle modal
    const handleModal = e => {
        e.preventDefault()
        const additionalNotes = e.target.additionalNotes.value;
        const donationMOney = e.target.donationMOney.value;
        const requestedFoods = {donatorName,donatorEmail,donatorImage,requesterName,requesterImage,requsterEmail,foodName,foodId,foodImage,pickupLocation,requestedDate,expireDate,additionalNotes,donationMOney}
        console.log(requestedFoods)
        axios.post('http://localhost:5000/requestFoods',requestedFoods)
        .then(response=>{
            console.log(response.data)
            if(response.data.insertedId){
                toast.success('Succesfully Added Your Request')
            }
        })
        .catch(error=>{
            console.log('Error is',error)
        })
    }
    return (
        <div>
            <button className="btn flex items-center w-full bg-sky-500 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}><FaHandHoldingHeart className="text-2xl text-red-500"></FaHandHoldingHeart>Request Now</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">

                    {/* close icon */}
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* form  */}
                    <h3 className="text-xl font-semibold text-center">Checkout Your Foods Request Information</h3>
                    <form onSubmit={handleModal} className="px-3 mt-3 space-y-5">
                        {/* donator name and email  */}
                        <div>
                            <h3 className="text-lg font-medium mb-1">Donator Information:</h3>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Donator Name</label>
                                    <input className="w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="text" name="donatorName" id="" value={donatorName} readOnly />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Donator Email</label>
                                    <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="email" name="donatorEmail" id="" value={donatorEmail} readOnly />
                                </div>
                            </div>

                        </div>

                        {/* user email and donation */}
                        <div>
                            <h3 className="text-lg font-medium mb-1">User Information:</h3>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Name</label>
                                    <input className="w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="text" name="userName" id="" value={user?.displayName} readOnly  />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Email</label>
                                    <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="email" name="userEmail" id="" value={user?.email} readOnly />
                                </div>
                            </div>
                        </div>

                        {/* user image */}
                        <div className="w-1/2">
                        <label htmlFor="" className="text-gray-600">Photo Url</label>
                                    <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="email" name="userEmail" id="" value={user?.photoURL} readOnly />  
                        </div>

                        {/* food name and id */}
                        <div>
                            <h3 className="text-lg font-medium mb-1">Food Information:</h3>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Food Name</label>
                                    <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="text" name="foodName" id="" readOnly value={foodName} />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="" className="text-gray-600">Food Id</label>
                                    <input className="w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="number" name="foodId" id="" value={foodId} readOnly />
                                </div>

                            </div>
                        </div>

                        {/* Food image and location */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Food Image Url</label>
                                <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="url" name="foodImage" id="" readOnly value={foodImage} />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Pickup Location</label>
                                <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="text" name="pickupLocation" id="" value={pickupLocation} readOnly />
                            </div>

                        </div>

                        {/* Request Date and expire date */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Request Date</label>
                                <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="text" name="requestDate" id="" value={requestedDate} readOnly />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Expire Date</label>
                                <input className=" w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="date" name="expireDate" id="" readOnly value={expireDate} />
                            </div>

                        </div>


                        {/* additional notes */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Additional Notes</label>
                                <input className=" border border-zinc-950 px-2 py-1 w-full rounded-md outline-slate-600 shadow-lg bg-slate-50" type="text" name="additionalNotes" id="" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="" className="text-gray-600">Donation Money</label>
                                <input className="w-full border border-zinc-950 px-2 py-1 rounded-md outline-slate-600 shadow-lg bg-slate-50 " type="number" name="donationMOney" id="" />
                            </div>

                        </div>

                        {/* request now */}
                        <div>
                            <input className="w-full bg-sky-500 rounded-md  btn" type="submit" value="Request Now" />
                        </div>
                    </form>

                </div>
            </dialog>
            <Toaster></Toaster>
        </div>
    );
};

export default FoodModal;