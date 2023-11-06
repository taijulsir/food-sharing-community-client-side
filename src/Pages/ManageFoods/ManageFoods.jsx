/* eslint-disable react/prop-types */

import { useEffect, useMemo, useState } from "react";

import AuthHook from "../../CustomHooks/AuthHook";
import axios from "axios";
import FoodsTable from "./FoodsTable";


const ManageFoods = () => {
    const {user} = AuthHook()
  const [myFoods,setMyFoods] = useState([])
  const url = `http://localhost:5000/allFoods?email=${user?.email}`
  useEffect(()=>{
    axios.get(url)
    .then(res=>{
        console.log(res.data)
        setMyFoods(res.data)
    })
    .catch(error=> {
        console.log(error)
    })
  },[url])



  const columns = useMemo(()=>
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
        Cell: ({ value }) => <img src={value} alt="Food" className="w-[200px] h-[100px] rounded-lg"  />,
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
  ],[]
  ) 
 
  const data =useMemo(() => myFoods, [myFoods])
    return (
        <div className="container mx-auto ">
           <FoodsTable columns={columns} data={data}></FoodsTable>
        </div>
    );
};

export default ManageFoods;