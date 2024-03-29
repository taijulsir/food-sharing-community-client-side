
import axios from "axios";
import AvailableBanners from "./AvailableBanners";
import AvailableCards from "./AvailableCards";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";



const AvailableFoods = () => {
   
    const [availableFoods, setAvailableFoods] = useState([])
    const [searchText, setSearchText] = useState('')
    const [sortingOption, setSortingOption] = useState('')


    // pagination
    const {count} = useLoaderData()
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const numberOfPages=parseInt(Math.ceil(count / itemsPerPage)) 
    const pages = [...Array(numberOfPages).keys()]
    const [currentPage, setCurrentPage] = useState(0);

    const handleItemsPerPage = (e) => {
        const number = parseInt(e.target.value)
        setItemsPerPage(number)
        setCurrentPage(0)
    }

    const handlePrevious = () => {

        if (currentPage > 0) {
            return setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            return setCurrentPage(currentPage + 1)
        }

    }

    // filter data
    const filterCardData = availableFoods?.filter((item) => {
        if (item && item.foodName && typeof item.foodName === 'string' && typeof searchText === 'string') {
            return item.foodName.toLowerCase().includes(searchText.toLowerCase());
        }
       
    });
    // search value
    const handleSearch = (e) => {
        e.preventDefault()
        const food = e.target.food.value;
        setSearchText(food)
    }

    useEffect(() => {
        axios.get(`https://food-donation-community-server-side.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => setAvailableFoods(res.data))
            .catch(error => console.log(error))
    }, [currentPage, itemsPerPage])



    // sorting
   // sorting
const handleSorting = (selectedoption) => {
    setSortingOption(selectedoption);
    const sortedFoods = [...filterCardData]; // Sort the filtered data
    if (selectedoption === 'quantity') {
        sortedFoods.sort((a, b) => b.foodQuantity - a.foodQuantity);
    } else if (selectedoption === 'nearExpire') {
        sortedFoods.sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate));
    } else if (selectedoption === 'longExpire') {
        sortedFoods.sort((a, b) => new Date(b.expireDate) - new Date(a.expireDate));
    }
    setAvailableFoods(sortedFoods); // Update the availableFoods state with sorted data
}

    return (
        <div>
            <Helmet>
                <title>Available Foods</title>
            </Helmet>
            <AvailableBanners></AvailableBanners>
            <section className="py-20 font-poppins dark:bg-gray-800 ">
                <div className="px-4 py-4 mx-auto container lg:py-6 md:px-6">
                    <div className="flex flex-wrap  -mx-3">

                        {/* left side container */}
                        <div className="w-full pr-2 lg:w-1/4 lg:block">

                            {/* category */}
                            <div className="p-4 mb-5 -white  border border-teal-600 dark:border-gray-900 dark:bg-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400"> Categories</h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
                                <ul>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-400 ">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg">Biriyani</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-400 ">
                                            <input type="checkbox" className="w-4 h-4 mr-2 " />
                                            <span className="text-lg">Chicken</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-400">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg">Beef</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-400">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg">Fride Rice</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-400">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg">Frozen Foods &amp; Staples</span>
                                        </label>
                                    </li>
                                </ul>
                                <a  className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400">View
                                    More</a>
                            </div>

                            {/* product status */}
                            <div className="p-4 mb-5 -white  border border-teal-600 dark:bg-gray-900 dark:border-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400">Product Status</h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
                                <ul>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">Available</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">Deliverded</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            {/* Brand */}
                            <div className="p-4 mb-5 -white  border border-teal-600 dark:bg-gray-900 dark:border-gray-900">
                                <h2 className="text-2xl font-bold dark:text-gray-400">Brand</h2>
                                <div className="w-16 pb-2 mb-6 border-b border-rose-600 dark:border-gray-400"></div>
                                <ul>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">Kacchi Bhai</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">Sultan Dine`s</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">PizzaBurg</span>
                                        </label>
                                    </li>
                                    <li className="mb-4">
                                        <label className="flex items-center dark:text-gray-300">
                                            <input type="checkbox" className="w-4 h-4 mr-2" />
                                            <span className="text-lg dark:text-gray-400">Haji Biriyani</span>
                                        </label>
                                    </li>
                                </ul>
                                <a  className="text-base font-medium text-blue-500 hover:underline dark:text-blue-400">View
                                    More</a>
                            </div>
                        </div>


                        <div className="w-full px-3 lg:w-3/4">
                            {/* icon */}
                            <div className="px-3 mb-4">
                                <div className="items-center justify-between hidden px-3 py-2 -100 md:flex dark:-900 ">
                                    <div className="flex">
                                        <a  className="inline-block h-full p-2 mr-3 border rounded-md -50 dark:text-gray-400 dark:-700 dark:border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-list" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                            </svg>
                                        </a>
                                        <a  className="inline-block h-full p-2 mr-3 border rounded-md -50 dark:text-gray-400 dark:-700 dark:border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-grid-fill" viewBox="0 0 16 16">
                                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                                            </svg>
                                        </a>
                                        <a  className="inline-block h-full p-2 mr-3 border rounded-md -50 dark:text-gray-400 dark:-700 dark:border-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    {/* search icon */}
                                    <form onSubmit={handleSearch}>
                                        <div className="flex -gray-100 shadow-xl p-4 w-80 lg:w-[350px] items-center  space-x-4 rounded-lg">

                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <input name="food" className="-gray-100 outline-none bg-teal-900/60 text-white font-bold" type="text"  placeholder="Food name or keyword..." />
                                            <div>
                                                <input className="btn bg-teal-900/60" type="submit" value="Search" />
                                            </div>
                                        </div>
                                    </form>

                                    {/* sorting */}
                                    <div className="flex items-center justify-between">
                                        <div className="pr-3 border-r border-gray-300">
                                            <select
                                                value={sortingOption}
                                                onChange={(e) => handleSorting(e.target.value)}
                                                className="block w-40 text-base bg-teal-100 cursor-pointer dark:text-gray-400 dark:bg-gray-900">
                                                <option value="quantity">Sort by Quantity</option>
                                                <option value="nearExpire">Sort by Near Expire</option>
                                                <option value="longExpire">Sort by Long Expire</option>
                                            </select>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                            {/* card container */}
                            <div className="flex flex-wrap items-center ">
                                {/* card item */}
                                <section className="flex items-center  font-poppins dark:bg-gray-900 ">
                                    <div className="justify-center max-w-7xl px-4 py-4 mx-auto lg:py-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                            {
                                                filterCardData.map(food => <AvailableCards key={food._id} food={food}></AvailableCards>)
                                            }

                                        </div>
                                    </div>
                                </section >
                            </div>

                            {/* pagination container */}
                            <div className="flex justify-end mt-6">
                                <button onClick={handlePrevious} className="btn mr-2 bg-teal-900 text-white hover:text-black ">Prev</button>
                                {pages.map(page => <button
                                    className={currentPage === page && 'bg-teal-600 btn mr-2' || 'btn mr-2' } 
                                    onClick={() => setCurrentPage(page)}
                                    key={page}>{page}</button>)}
                                <button onClick={handleNext} className="btn mr-2 bg-teal-900 text-white hover:text-black">Next</button>
                                <select className="border bg-teal-900 rounded-lg shadow-xl px-3 py-2" value={itemsPerPage} name="" id="" onChange={handleItemsPerPage}>
                                    <option value="6">6</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AvailableFoods;