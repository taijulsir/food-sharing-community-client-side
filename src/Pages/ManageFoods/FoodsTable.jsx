/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useTable } from "react-table";
import { Link } from "react-router-dom";


const FoodsTable = ({ columns, data, onDelete }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });

    const deleteBtn = (row) => {
        onDelete(row.original._id);
    };


    const handleManage = (row) => {
        console.log('Manage:', row.original);
    };

    return (

        <div>

            <table {...getTableProps()} className=" container mx-auto mt-10">

                <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr key={index} {...headerGroup.getHeaderGroupProps()} className="bg-blue-500 text-white" >
                            {headerGroup.headers.map((column, index) => (
                                <th key={index} {...column.getHeaderProps()} className="px-4 py-2">
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th>Delete</th>
                            <th>Update</th>
                            <th>Manage</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-b border-r border-l">
                                {row.cells.map((cell, index) => (
                                    <td key={index} {...cell.getCellProps()} className="px-4 py-2 border-r text-xl font-medium text-zinc-950 text-center align-middle">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                             
                                <td className="pl-3">
                                    <button
                                        onClick={() => deleteBtn(row)}
                                        className=" btn px-2 py-1 bg-red-500 text-white mr-2  "
                                    >
                                        Delete
                                    </button>
                                </td>
                                {/* create an modal */}
                                <td>                                  
                                        {/* <UpdateFoodsModal food={row.original}></UpdateFoodsModal> */}
                                        <Link to={`/updateFoods/${row.original._id}`}><button
                                         className=" btn px-2 py-1 bg-teal-500 text-white "
                                        >Update</button></Link>
                                </td>
                                <td>
                                   <Link to={`/foods/${row.original._id}`}> <button
                                        onClick={() => handleManage(row)}
                                        className=" btn px-2 py-1 bg-blue-500 text-white "
                                    >
                                        Manage
                                    </button></Link>
                                </td>
                              
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )


};

export default FoodsTable;