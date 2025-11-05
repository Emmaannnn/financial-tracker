import { FaSearch } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";



const recentArr = [
    {
        date : '02/23/2025',
        category : 'Food',
        desc : 'Lunch sa Mcdo',
        type : 'Expense',
        amount : 234
    }, {
        date : '12/16/2025',
        category : 'Transportation',
        desc : 'Bus',
        type : 'Expense',
        amount : 310
    }, {
        date : '04/29/2025',
        category : 'Grocery',
        desc : 'Paninda',
        type : 'Expense',
        amount : 5052
    },    {
        date : '02/23/2025',
        category : 'Food',
        desc : 'Lunch sa Mcdo',
        type : 'Expense',
        amount : 234
    }, {
        date : '12/16/2025',
        category : 'Transportation',
        desc : 'Bus',
        type : 'Expense',
        amount : 310
    }, {
        date : '04/29/2025',
        category : 'Grocery',
        desc : 'Paninda',
        type : 'Expense',
        amount : 5052
    },    {
        date : '02/23/2025',
        category : 'Food',
        desc : 'Lunch sa Mcdo',
        type : 'Expense',
        amount : 234
    }, {
        date : '12/16/2025',
        category : 'Transportation',
        desc : 'Bus',
        type : 'Expense',
        amount : 310
    }, {
        date : '04/29/2025',
        category : 'Grocery',
        desc : 'Paninda',
        type : 'Expense',
        amount : 5052
    }
];


const Transaction_expenses = () => {
  return (

    <div className="col-span-9">
        <div className="flex flex-col w-full bg-white shadow-sm rounded-lg px-4 py-3">
            <div className="text-md font-bold text-black/80 flex justify-between p-2">
                <h1 className="flex justify-start items-center gap-3 font-[Inter] text-2xl"><AiOutlineTransaction/> Transaction</h1>
            </div>

            <div className="flex justify-between items-center mb-10 px-4">
                <div className="flex items-center gap-3">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="cursor-pointer mt-1 bg-white text-black border border-black/15 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3" 
                        onClick={() => {
                            const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
                            modal?.showModal();
                        }}><IoMdAdd/> Add
                    </button>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                    </dialog>


                </div>

                <div className="flex items-center gap-3">
                    <label className="input border border-black/15 bg-transparent shadow-xs p-2 w-50">
                        <FaSearch className="h-[1em] opacity-50" />
                        <input type="search" required placeholder="Search" />
                    </label>

                    <details className="dropdown">
                        <summary className="cursor-pointer bg-white text-black border border-black/15 rounded-md px-3 py-2 w-47 text-sm font-medium hover:bg-gray-50 flex items-center justify-between" >
                            Filter by Category
                            <span className="text-gray-500 text-xl"><MdOutlineArrowDropDown/></span>
                        </summary>

                        <ul className="menu dropdown-content bg-white rounded-md z-[1] w-52 p-2 shadow border border-black/15 mt-1" >
                            <li>
                                <label className="flex items-center justify-between text-sm">
                                    Food
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent border border-black/30 rounded-full ml-2" />
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center justify-between text-sm">
                                    Transportation
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent border border-black/30 rounded-full ml-2" />
                                </label>
                            </li>
                            <li>
                                <label className="flex items-center justify-between text-sm">
                                    Grocery
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent border border-black/30 rounded-full ml-2" />
                                </label>
                            </li>
                        </ul>
                    </details>
                </div>


            </div>


            <div className="overflow-x-auto">
                <table className="table mb-3">
                        {/* head */}
                        <thead className="text-black/70 ">
                            <tr>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    <tbody>

                    {recentArr.map((RecentActivity, index) => (
                        <tr className="border-y border-black/15 text-sm" key={index}>
                            <th>{RecentActivity.date}</th>
                            <td>{RecentActivity.category}</td>
                            <td>{RecentActivity.desc}</td>
                            <td>₱ {RecentActivity.amount}</td>
                        </tr>
                    ))}


                    </tbody>

                </table>

                <div className="join flex justify-center">
                    <button className="join-item cursor-pointer mt-1 bg-white text-black border border-black/15 px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3">«</button>
                    <button className="join-item cursor-pointer mt-1 bg-white text-black border border-black/15 px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3">Page 1</button>
                    <button className="join-item cursor-pointer mt-1 bg-white text-black border border-black/15 px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3">»</button>
                </div>
                
            </div>
        </div>
    </div>


  )
}

export default Transaction_expenses
