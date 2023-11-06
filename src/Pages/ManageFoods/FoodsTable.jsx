/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useTable } from "react-table";
import UpdateFoodsModal from "./UpdateFoodsModal";


const FoodsTable = ({ columns, data,onDelete }) => {
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

    const handleDelete = (row) => {
        // Implement the delete logic here for the selected row
        onDelete(row.original._id);
    };

    const handleUpdate = (row) => {
        // Implement the update logic here for the selected row
        console.log('Update:', row.original);
    };

    const handleManage = (row) => {
        // Implement the manage logic here for the selected row
        console.log('Manage:', row.original);
    };

    return (

        <div className="container mx-auto mt-10">

            <table {...getTableProps()}>
               
                <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr key={index} {...headerGroup.getHeaderGroupProps()} className="bg-blue-500 text-white" >
                            {headerGroup.headers.map((column,index) => (
                                <th key={index} {...column.getHeaderProps()} className="px-4 py-2">
                                    {column.render('Header')}
                                </th>
                            ))}
                            <th>Action</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-b">
                                {row.cells.map((cell,index) => (
                                    <td key={index} {...cell.getCellProps()} className="px-4 py-2">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                                <td>
                                    <button
                                        onClick={() => handleDelete(row)}
                                        className=" btn px-2 py-1 bg-red-500 text-white mr-2"
                                    >
                                        Delete
                                    </button>
                                    <button onClick={handleUpdate(row)}>
                                        
                                        <UpdateFoodsModal food={row.original}></UpdateFoodsModal>
                                    </button>
                                    <button
                                        onClick={() => handleManage(row)}
                                        className=" btn px-2 py-1 bg-blue-500 text-white"
                                    >
                                        Manage
                                    </button>
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