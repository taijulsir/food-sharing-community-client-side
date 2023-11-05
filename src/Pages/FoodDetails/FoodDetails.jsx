import { useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData()

    return (
        <div>
            <h1>My food id is {food._id}</h1>
        </div>
    );
};

export default FoodDetails;