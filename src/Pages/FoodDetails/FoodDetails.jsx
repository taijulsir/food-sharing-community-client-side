/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import FoodModal from "./FoodModal";

const FoodDetails = () => {
    const food = useLoaderData()
    const { _id, foodName, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorDesignation } = food;

    const handleSubscribe = (e) => {
        e.preventDefault()
        const subscribe = e.target.subscribe.value;
        toast.success('Thanks For Subscribe')
    }
    return (
        <div>
            <section className=" py-14 bg-stone-100 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <div className="grid lg:grid-cols-[70%,1fr]  gap-6  pt-9 pb-7">
                        <div>
                            <div className="px-4 py-3">

                                <h1 className="mt-4 text-2xl font-semibold capitalize dark:text-gray-400 mb-5 font-poppins">
                                    Share Your Plate🍲, Share the Love❤🧡.
                                </h1>

                                <p className="text-sm text-zinc-950">Donated By:</p>

                                {/* Donator container */}
                                <div className="flex-wrap items-center justify-between my-2 md:flex">
                                    <div className="flex gap-3">
                                        <div>
                                            <img src={donatorImage} alt=""
                                                className="object-cover w-16 h-16 rounded-full" />
                                        </div>
                                        <div className="mt-2"> <a href="#" className="text-sm dark:text-gray-400 font-medium">{donatorName}
                                        </a><br />
                                            <span className="mr-2 text-blue-400 dark:text-blue-300"> {donatorDesignation} </span>

                                        </div>
                                    </div>

                                    {/* Social link */}
                                    <div className="flex">
                                        <ul className="flex flex-wrap py-3">
                                            <li className="p-1 social-box w-11 h-11">
                                                <a href=""
                                                    className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-silver-darker rd-br-full rd-tl-full hover:scale-105"
                                                    style={{ backgroundColor: 'rgb(66, 100, 169)' }}>
                                                    <div className="icon">

                                                        <svg enableBackground="new 0 0 56.693 56.693" height="56.693px"
                                                            id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693"
                                                            className="w-6 h-6 fill-gray-100" width="56.693px" xmlSpace="preserve"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink">
                                                            <path
                                                                d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="p-1 social-box w-11 h-11"><a href="
                                    " className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-gradient-to-r from-pink-500 to-red-500 bg-silver-darker rd-bl-full rd-tr-full hover:scale-105">
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" className="w-6 h-6 bi bi-instagram"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                    </svg>
                                                </div>

                                            </a></li>

                                            <li className="p-1 social-box w-11 h-11"><a href="
                                    " className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-sky-700 bg-silver-darker rd-tl-full rd-br-full hover:scale-105">
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" className="w-6 h-6 bi bi-linkedin"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                    </svg>
                                                </div>

                                            </a></li>
                                            <li className="p-1 social-box w-11 h-11"><a href="
                                    " className="flex flex-col items-center justify-center w-full h-full text-white transition-transform duration-200 ease-in transform bg-red-600 bg-silver-darker rd-tl-full rd-br-full hover:scale-105">
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" className="w-6 h-6 bi bi-pinterest"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                                                    </svg>
                                                </div>

                                            </a></li>


                                        </ul>
                                    </div>
                                </div>

                                {/* Food Image */}
                                <div className="w-full h-96 mt-7">
                                    <img src={foodImage} alt=""
                                        className="object-cover w-full h-full " />
                                    <h3 className="text-3xl font-semibold text-center mt-2 text-teal-600 ">{foodName}</h3>
                                </div>


                                {/* location */}
                                <div className="mt-16 flex justify-between">
                                    <h3 className="flex items-center text-xl font-medium">  <a href="" className="mr-1 text-blue-600 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                            className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path
                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </a>Pickup Address: {pickupLocation}</h3>
                                    <div>
                                        <h3 className="text-xl font-medium
                                        ">🍲Quantity: {foodQuantity} person</h3>
                                    </div>
                                </div>

                                {/* Donator inspiration text */}
                                <div className="mt-6 mb-6 text-gray-700 font-poppins dark:text-gray-400">
                                    <blockquote
                                        className="pl-8 italic bg-gray-100 border-l-4 border-red-500 dark:border-red-400 dark:bg-gray-700 py-7 md:pl-7">
                                        -
                                        *<span className="font-semibold underline">Be a Food Waste Warrior</span>: Save good food from waste, nourishing those in need. Your role is more than donations; it`s a lifeline against hunger. By preserving resources, reducing emissions, and inspiring others, you`re part of a vital mission to create a world where no one goes to bed hungry</blockquote>

                                </div>

                                {/* category */}
                                <div>
                                    <h2 className="my-1 text-2xl font-semibold text-gray-900 dark:text-gray-400 font-poppins">Category
                                    </h2>
                                    <div className="w-24 mb-3 border-b-2 border-blue-500 dark:border-gray-400 inset-px"></div>
                                    <div className="flex flex-wrap gap-2 my-4 font-poppins ">
                                        <a className="px-4 py-2 mb-2 text-xs text-black transition bg-gray-300 rounded btn btn-sm hover:bg-blue-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-900 hover:text-white"
                                        >
                                            {category}</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* subscribe */}
                        <div>
                            <div className="p-6 mb-6 bg-gray-100 border shadow dark:border-gray-700 dark:bg-gray-700 ">
                                <div className="text-center">
                                    <p className="text-sm text-blue-500 dark:text-blue-400">Want More?</p>
                                    <p className="my-2 text-base font-semibold text-black capitalize dark:text-gray-300 ">
                                        Get The Donation notification  in your inbox.
                                    </p>
                                </div>
                                <form onSubmit={handleSubscribe}>
                                    <div className="w-full px-4">
                                        <input type="email" name="subscribe" id="" placeholder="Enter Email " required
                                            className="w-full px-4 py-3 mt-2 bg-white border dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400" />
                                        <button type="submit"
                                            className="block w-full px-4 py-3 mt-4 font-medium text-gray-100 bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-600 ">Subscribe Me</button>
                                    </div>
                                </form>

                            </div>
                            <div className="mb-6 ">
                                <img src="https://i.ibb.co/Xt76yb3/Donate-food-1.jpg" alt=""
                                    className="object-cover w-full lg:h-80 h-96" />
                            </div>

                            {/* modal function */}
                            <div>
                                <FoodModal food={food}></FoodModal>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Toaster></Toaster>

        </div>
    );
};

export default FoodDetails;