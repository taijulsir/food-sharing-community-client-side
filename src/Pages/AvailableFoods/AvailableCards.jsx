/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const AvailableCards = ({ food }) => {
    const { _id, foodName, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorDesignation } = food;
    return (
        <div>
            <div>
                <div>

                    {/* food image */}
                    <div className="relative w-full h-56">
                        <img src={foodImage} alt=""
                            className="object-cover w-full h-full rounded-lg " />
                        {category && <span className="absolute top-0 left-0 px-3 py-1 rounded-md text-xl mt-2 ml-2 text-white bg-blue-700">
                            {category}</span>}
                    </div>

                    {/* foodname */}
                    <div className="p-4 bg-teal-200 shadow-xl dark:bg-gray-700">
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <a href="">
                                    <h2 className="text-xl font-semibold dark:text-gray-300">{foodName}</h2>
                                </a>
                            </div>

                            {/* icon */}
                            <div className="flex">
                                <button href="" className="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor"
                                        className="bi bi-share" viewBox="0 0 16 16">
                                        <path
                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                    </svg>
                                </button>
                                <button className="text-lg font-medium text-red-600 dark:text-gray-300" href=""><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-heart" viewBox="0 0 16 16">
                                    <path
                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg></button>
                            </div>
                        </div>

                        {/* location */}
                        <div className="flex items-center mb-4">
                            <a href="" className="mr-1 text-blue-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                    className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </a>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{pickupLocation}</span>
                        </div>
                        <h2 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-400">
                            {additionalNotes}
                        </h2>

                        {/* donator information */}
                        <div>
                            <div className='flex items-center gap-4'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={donatorImage} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-lg text-[#403F3F] font-semibold'>{donatorName}</h3>
                                    <p>{donatorDesignation} </p>
                                </div>
                            </div>
                        </div>


                        {/* Food Quantity and expire date */}
                        <div>

                            <div className="flex items-center justify-between">
                                <p className="text-lg ">Quantity: {foodQuantity} person</p>
                                <div>
                                    <p className="text-lg mr-2">Expire On:</p>

                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-400">{expireDate}</span>
                                </div>
                            </div>
                        </div>

                        {/* Details button */}
                        <div>
                            <Link className="flex items-center justify-between mt-3" to={`/foodDetails/${_id}`}>
                                <button
                                    className="w-full py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100">
                                    View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailableCards;