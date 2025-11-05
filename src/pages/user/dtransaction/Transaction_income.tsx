import { IoMdAdd } from "react-icons/io";

const recentArr = [
    {
        date : '02/23/2025',
        amount : 3510
    }, {
        date : '12/16/2025',
        amount : 8923
    }, {
        date : '04/29/2025',
        amount : 9300
    }
];


const Transaction_income = () => {
  return (
    <div className="col-span-3 ">
        <div className="flex flex-col w-full bg-white shadow-sm rounded-lg px-4 py-3">
            <h1 className="text-2xl font-[Inter] font-bold">Income</h1>

            <div className="flex justify-between items-center my-3 2">
                <div className="flex items-center gap-3">
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
                
            </div>

            <div className="overflow-x-auto">
                <table className="table mb-3">
                        {/* head */}
                        <thead className="text-black/70 ">
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    <tbody>

                    {recentArr.map((RecentActivity, index) => (
                        <tr className="border-y border-black/15 text-sm" key={index}>
                            <th>{RecentActivity.date}</th>
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

export default Transaction_income
