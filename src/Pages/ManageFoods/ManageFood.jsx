import { useLoaderData } from "react-router-dom";


const ManageFood = () => {
    const foods = useLoaderData()
    console.log(foods)
    const { _id, foodName, foodImage, donatorName, donatorImage, foodQuantity, pickupLocation, expireDate, additionalNotes, category, donatorDesignation } = foods.foods;

    const handleStatus = (e) => {
        e.preventDefault()
        const form = e.target;
       const status = form.status.value;
       console.log(status)

    }
    return (
        <div>

            {/* foods image */}
            <section className="flex items-center py-10  font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
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
            </section>

            {/* requester information */}

            <h3 className="text-3xl font-bold text-center">Who are Request</h3>

            <div className="flex flex-wrap gap-6 ">

                {foods.requests.map(request =>
                    <div key={request._id}
                        className="bg-[#4878a3] px-8 py-10 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
                        <div className="flex flex-col items-center">
                            <img src={request.requesterImage} className="w-60 h-60 rounded-full" />
                            <div className="mt-6 text-center">
                                <p className="text-base text-gray-400 font-bold uppercase">{request.requesterName}</p>
                                <h3 className="text-white font-bold text-xl mt-4">{request.requsterEmail}</h3>
                            </div>
                        </div>
                    </div>)}
            </div>
            <div className="flex items-center justify-center mt-10">
                <p className="text-xl font-medium text-zinc-950 mr-3">Status:</p>
                <form onClick={handleStatus}>
                    <div className="w-48 flex items-center">
                       
                        <select name="status" className="w-full border  border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500">
                            <option value="available">available</option>
                            <option value="Deliverd">Delivered</option>
                        </select>
                       <input type="submit" value="Change" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ManageFood;