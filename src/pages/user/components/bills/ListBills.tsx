import { PiTarget } from "react-icons/pi";
import { MdWarningAmber } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";


const BudgetArr = [
    {
        category : 'Transportation',
        budget : 1000,
        spent : 310,
        progress : 31
    }, {
        category : 'Grocery',
        budget : 10000,
        spent : 5052,
        progress : 49.58
    }, {
        category : 'Food',
        budget : 5000,
        spent : 4287,
        progress : 85.74
    }
];

const ListBills = () => {
  return (
    <div className="col-span-12 flex flex-col w-full bg-white shadow-sm rounded-lg px-4 py-3 mt-5">
        <div className="text-md font-bold text-black/80 flex justify-between p-2">
            <h1 className="flex justify-start items-center gap-3 font-[Inter] "><PiTarget /> List of Bills</h1>
        </div>

        <div className="overflow-x-auto">
            <table className="table mb-3">
                    {/* head */}
                    <thead className="text-black/70 ">
                        <tr>
                            <th>Bill Name</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                <tbody>

                {BudgetArr.map((BudgetGoal, index) => (
                    <tr className="border-y border-black/15 text-sm" key={index}>
                        <th className="flex items-center gap-2">{BudgetGoal.category} {BudgetGoal.progress >= 80 && (<span className="text-yellow-500"><MdWarningAmber/></span>)}</th>
                        <td>₱ {BudgetGoal.budget}</td>
                        <td>₱ {BudgetGoal.spent}</td>
                        <td>₱ {BudgetGoal.budget - BudgetGoal.spent}</td>
                        <td>{Number((BudgetGoal.spent / BudgetGoal.budget * 100)).toFixed(1)}%</td>
                        <td className="flex gap-1 text-white">
                            <button className="btn btn-warning btn-sm"><FaRegEdit/></button>
                            <button className="btn btn-error btn-sm"><MdOutlineDelete/></button>
                        </td>
                    </tr>
                ))}


                </tbody>

            </table>
        </div>

    </div>
  )
}

export default ListBills
