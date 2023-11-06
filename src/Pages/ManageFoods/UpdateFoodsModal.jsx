/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthHook from "../../CustomHooks/AuthHook";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UpdateFoodsModal = ({ food }) => {
    const { user } = AuthHook()
    const { _id, foodName, foodId, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorEmail,status } = food;

    // update form
    const designation = "Food Donator"
    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodId = form.foodId.value;
        const foodQuantity = form.foodQuantity.value;
        const donatorName = user?.displayName;
        const donatorEmail = user?.email;
        const donatorImage = user?.photoURL;
        const donatorDesignation = designation
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const category = form.category.value;
        const additionalNotes = form.additionalNotes.value;
        const status = form.status.value;
        const foods = {foodName,foodImage,foodId,foodQuantity,donatorName,donatorEmail,donatorImage,pickupLocation,expireDate,category, additionalNotes,status,donatorDesignation}
        console.log(foods)
        axios.put(`http://localhost:5000/updateFoods/${_id}`,foods)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                toast.success('succesfully added')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div>
                <button className="btn  w-full bg-sky-500 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Update</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">

                        {/* close icon */}
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                        {/* form  */}
                        <h3 className="text-xl font-semibold text-center">Checkout Your Foods Request Information</h3>
                        <form onSubmit={handleUpdate} className="px-3 mt-3 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/*donator name  */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Name" name="donatorName" required value={donatorName}
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                        viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path
                                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                            data-original="#000000"></path>
                                    </svg>
                                </div>

                                {/* donator email */}
                                <div className="relative flex items-center">
                                    <input type="email" placeholder="Email" name="donatorEmail" value={donatorEmail} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                        viewBox="0 0 682.667 682.667">
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                            <path fill="none" strokeMiterlimit="10" strokeWidth="40"
                                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                data-original="#000000"></path>
                                            <path
                                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                data-original="#000000"></path>
                                        </g>
                                    </svg>
                                </div>
                                {/* donator  image  */}
                                <div className="relative flex items-center">
                                    <input type="url" placeholder="Your Photo Url" name="donatorImage" value={donatorImage} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>
                                {/* PickUp location */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Pickup Location" name="pickupLocation" value={pickupLocation} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>

                                {/* food id */}
                                <div className="relative flex items-center">
                                    <input type="number" placeholder="Food Id" name="foodId" value={foodId} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>
                                {/* food name */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Food Name" name="foodName" value={foodName} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>

                                {/* food image */}
                                <div className="relative flex items-center">
                                    <input type="url" placeholder="Food Photo Url" name="foodImage" value={foodImage} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>

                                {/*food quantity  */}
                                <div className="relative flex items-center">
                                    <input type="number" placeholder="Food Quantity" value={foodQuantity} name="foodQuantity" required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>

                                {/* category */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Category as Chicken,Beef" value={category} name="category" required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>
                                {/* Expire Date */}
                                <div className="relative flex items-center">
                                    <input type="date" placeholder="Expire Date" value={expireDate} name="expireDate" required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>
                                {/* Additional Notes */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Additional Notes" value={additionalNotes} name="additionalNotes" required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>
                                {/* status */}
                                <div className="relative flex items-center">
                                    <input type="text" placeholder="Status" name="status" value={status} required
                                        className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                                </div>

                            </div>
                            <button type="submit"
                                className="mt-8 px-6 py-2 w-full text-sm font-semibold bg-[#007bff] text-white hover:bg-[#006bff]">Update</button>
                        </form>

                    </div>
                </dialog>
                <Toaster></Toaster>
            </div>

        </div>
    );
};

export default UpdateFoodsModal;