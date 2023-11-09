import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import AuthHook from "../../CustomHooks/AuthHook";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import add from "../../Lottie/Add - 1699520025062.json"

const AddFood = () => {

    const { user } = AuthHook()
    //  const { _id, foodName, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorDesignation,foodId,donatorEmail,status } = food;

    const designation = "Food Donator"
    const handleAddFoods = (e) => {
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
        const foods = { foodName, foodImage, foodId, foodQuantity, donatorName, donatorEmail, donatorImage, pickupLocation, expireDate, category, additionalNotes, status, donatorDesignation }
        console.log(foods)
        axios.post('https://food-donation-community-server-side.vercel.app/addFoods', foods)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success('succesfully added')
                    form.reset()
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Helmet>
                <title>Add Food Form</title>
            </Helmet>
          
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
                {/* add food form */}
                <div className="w-full lg:w-1/2">
                <h1 className="text-3xl font-bold text-center font-mono ">Add Your Foods</h1>
                    <form className="px-3 mt-3 pt-5 pb-8 space-y-5 bg-teal-700/50 shadow-lg rounded-md" onSubmit={handleAddFoods}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/*donator name  */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Name" name="donatorName" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />
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
                                <input type="email" placeholder="Email" name="donatorEmail" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />
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
                                <input type="url" placeholder="Your Photo Url" name="donatorImage" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>
                            {/* PickUp location */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Pickup Location" name="pickupLocation" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>

                            {/* food id */}
                            <div className="relative flex items-center">
                                <input type="number" placeholder="Food Id" name="foodId" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>
                            {/* food name */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Food Name" name="foodName" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>

                            {/* food image */}
                            <div className="relative flex items-center">
                                <input type="url" placeholder="Food Photo Url" name="foodImage" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>

                            {/*food quantity  */}
                            <div className="relative flex items-center">
                                <input type="number" placeholder="Food Quantity" name="foodQuantity" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>

                            {/* category */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Category as Chicken,Beef" name="category" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>
                            {/* Expire Date */}
                            <div className="relative flex items-center">
                                <input type="date" placeholder="Expire Date" name="expireDate" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>
                            {/* Additional Notes */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Additional Notes" name="additionalNotes" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>
                            {/* status */}
                            <div className="relative flex items-center">
                                <input type="text" placeholder="Status" name="status" required
                                    className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none rounded-md" />

                            </div>

                        </div>
                        <button type="submit"
                            className="mt-8 px-6 py-2 btn w-full text-lg font-semibold bg-sky-600 text-black">Submit</button>
                    </form>
                </div>
                {/* animation */}
                <div className="relative items-center  justify-center hidden w-full lg:flex lg:w-1/2 ">
                    <Lottie
                        animationData={add}
                        options={defaultOptions}
                        height={500}
                        width={500}>
                    </Lottie>
                </div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default AddFood;