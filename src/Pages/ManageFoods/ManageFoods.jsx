/* eslint-disable react/prop-types */

import { useEffect, useMemo, useState } from "react";

import AuthHook from "../../CustomHooks/AuthHook";
import axios from "axios";
import FoodsTable from "./FoodsTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import nodata from "../../Lottie/nodata - 1699457305397.json"

const ManageFoods = () => {
    const { user } = AuthHook()
    const [myFoods, setMyFoods] = useState([])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    // fetch by specify user
    const url = `https://food-donation-community-server-side.vercel.app/allFoods?email=${user?.email}`
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMyFoods(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [url])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://food-donation-community-server-side.vercel.app/allFoods/${id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingFoods = myFoods.filter(food => food._id !== id)
                            setMyFoods(remainingFoods)
                            console.log(myFoods)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });

    }

    const columns = useMemo(() =>
        [

            {
                Header: 'Food Id',
                accessor: 'foodId',
            },
            {
                Header: 'Food Name',
                accessor: 'foodName',
            },
            {
                Header: 'Food Image',
                accessor: 'foodImage',
                Cell: ({ value }) => <div className="flex flex-col items-center justify-center "><img src={value} alt="Food" className="w-[200px] h-[100px] rounded-lg" /></div>,
            },
            {
                Header: 'Donator Name',
                accessor: 'donatorName',
            },
            {
                Header: 'Donator Email',
                accessor: 'donatorEmail',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ value }) => (
                    <div className=" text-teal-400 ">
                        {value}
                    </div>
                ),
            },
        ], []
    )

    const data = useMemo(() => myFoods, [myFoods])

    if (myFoods.length === 0) {
        return <div className="max-w-5xl mx-auto "><Lottie
            animationData={nodata}
            options={defaultOptions}
            height={400}
            width={400}>
        </Lottie></div>
    }
    return (
        <div className=" ">
            <Helmet>
                <title>Manage Your Foods</title>
            </Helmet>
            <h3 className=" font-bold mb-10 text-2xl mt-10 container mx-auto text-center underline  font-mono">At a Glance See Your Sharing Foods</h3>
            <FoodsTable columns={columns} data={data} onDelete={handleDelete}></FoodsTable>
        </div>
    );


};

export default ManageFoods;