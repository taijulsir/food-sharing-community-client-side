import axios from "axios";
import { useEffect,  useState } from "react";
import FoodsCard from "./FoodsCard";
import { Link } from "react-router-dom";
const Featured = () => {
    const [foods, setFoods] = useState([])
    const [sortFoods, setSortFoods] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => {
                setFoods(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    useEffect(()=>{
        const sortedFoods = foods.sort((a, b) => b.foodQuantity - a.foodQuantity)
        setSortFoods(sortedFoods)
    },[foods,sortFoods])


   
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10 ">Discover Our Featured Foods</h1>
            <p className="text-center lg:w-2/5 mx-auto mb-16 mt-3">Explore a delectable selection of handpicked dishes and essential items. Our Featured Foods page showcases the finest contributions from our generous donors. Discover a world of flavors and ingredients.</p>
            <section className="flex items-center  font-poppins dark:bg-gray-900 mb-16 ">
                <div className="justify-center container px-4 py-4 mx-auto lg:py-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">

                        {
                            sortFoods.slice(0, 6).map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                        }

                    </div>
                </div>
            </section >
            <div className="text-center">
                <Link to='/availableFoods'><button className="btn bg-teal-700 font-bold">Show All Foods</button></Link>
            </div>
        </div>

    );
};

export default Featured;