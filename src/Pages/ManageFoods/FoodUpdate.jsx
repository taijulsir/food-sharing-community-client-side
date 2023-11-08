import { useLoaderData } from "react-router-dom";
import AuthHook from "../../CustomHooks/AuthHook";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";



const FoodUpdate = () => {
    const food = useLoaderData()
    const { user } = AuthHook()
    const { _id, foodName, foodId, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorEmail, status } = food;


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
        const foods = { foodName, foodImage, foodId, foodQuantity, donatorName, donatorEmail, donatorImage, pickupLocation, expireDate, category, additionalNotes, status, donatorDesignation }
        console.log(foods)
        axios.put(`https://food-donation-community-server-side.vercel.app/updateFoods/${_id}`, foods)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    toast.success('succesfully Updated')
                
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="container mx-auto">
              <Helmet>
                <title>Update Food Details of {foodName}</title>
            </Helmet>
            <h3 className="text-xl font-semibold text-center">Checkout Your Foods Request Information</h3>
            <form onSubmit={handleUpdate} className="px-3 mt-3 space-y-5">
                <div className="grid sm:grid-cols-2 gap-6">
                    {/*donator name  */}
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Name" name="donatorName" defaultValue={donatorName}
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
                        <input type="email" placeholder="Email" name="donatorEmail" defaultValue={donatorEmail}
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
                        <input type="url" placeholder="Your Photo Url" name="donatorImage" defaultValue={donatorImage}
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
            
                    {/* pickup Location */}
                    <div className=" relative flex items-center">
                        <input type="text" name="pickupLocation" placeholder="Pickup Location" defaultValue={pickupLocation} id="" className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
                    {/* food id */}
                    <div className="relative flex items-center">
                        <input type="number" placeholder="Food Id" name="foodId" defaultValue={foodId}
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
                    {/* food name */}
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Food Name" name="foodName" defaultValue={foodName}
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>

                    {/* food image */}
                    <div className="relative flex items-center">
                        <input type="url" placeholder="Food Photo Url" name="foodImage" defaultValue={foodImage}
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>

                    {/*food quantity  */}
                    <div className="relative flex items-center">
                        <input type="number" placeholder="Food Quantity" defaultValue={foodQuantity} name="foodQuantity"
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>

                    {/* category */}
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Category as Chicken,Beef" defaultValue={category} name="category"
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
                    {/* Expire Date */}
                    <div className="relative flex items-center">
                        <input type="date" placeholder="Expire Date" defaultValue={expireDate} name="expireDate"
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
                    {/* Additional Notes */}
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Additional Notes" defaultValue={additionalNotes} name="additionalNotes"
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>
                    {/* status */}
                    <div className="relative flex items-center">
                        <input type="text" placeholder="Status" name="status" defaultValue={status}
                            className="px-4 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none" />

                    </div>

                </div>
                <button type="submit"
                    className="mt-8 px-6 py-2 w-full text-sm font-semibold bg-[#007bff] text-white hover:bg-[#006bff]">Update</button>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default FoodUpdate;