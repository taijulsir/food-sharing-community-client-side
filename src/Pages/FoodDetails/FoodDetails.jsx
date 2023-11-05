import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData()
    return (
        <div>
            <h1>Donator information</h1>
            <h3>Donar Name: {food.donatorName}</h3>
        </div>
    );
};

export default FoodDetails;