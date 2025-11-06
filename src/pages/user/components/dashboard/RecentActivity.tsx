import { FaHistory } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { MdWarningAmber } from "react-icons/md";
import { Link } from "react-router-dom";


const recentArr = [
    {
        date : '02/23/2025',
        category : 'Food',
        desc : 'Lunch sa Mcdo',
        amount : 234
    }, {
        date : '12/16/2025',
        category : 'Transportation',
        desc : 'Bus',
        amount : 310
    }, {
        date : '04/29/2025',
        category : 'Grocery',
        desc : 'Paninda',
        amount : 5052
    }
];

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


const RecentActivity = () => {
  return (
    <div className="grid grid-cols-12 font-[Inter] gap-3">

        <div className="col-span-6 flex flex-col w-full bg-white shadow-sm rounded-lg px-4 py-3">
            <div className="text-md font-bold text-black/80 flex justify-between p-2">
                <h1 className="flex justify-start items-center gap-3 font-[Inter] "><FaHistory/> Recent Activity</h1>
                <Link to='/Transaction' className="text-xs p-2 rounded-md shadow-sm items-center justify-center flex">See all</Link>
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
            </div>

        </div>


        <div className="col-span-6 flex flex-col w-full bg-white shadow-sm rounded-lg px-4 py-3">
            <div className="text-md font-bold text-black/80 flex justify-between p-2">
                <h1 className="flex justify-start items-center gap-3 font-[Inter] "><PiTarget /> Budget Goal</h1>
                <Link to='/Budget' className="text-xs p-2 rounded-md shadow-sm items-center justify-center flex">See all</Link>
            </div>

            <div className="overflow-x-auto">
                <table className="table mb-3">
                        {/* head */}
                        <thead className="text-black/70 ">
                            <tr>
                                <th>Category</th>
                                <th>Budget</th>
                                <th>Spent</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                    <tbody>

                    {BudgetArr.map((BudgetGoal, index) => (
                        <tr className="border-y border-black/15 text-sm" key={index}>
                            <th className="flex items-center gap-2">{BudgetGoal.category} {BudgetGoal.progress >= 80 && (<span className="text-yellow-500"><MdWarningAmber/></span>)}</th>
                            <td>₱ {BudgetGoal.budget}</td>
                            <td>₱ {BudgetGoal.spent}</td>
                            <td><progress className="progress progress-secondary w-40" value={BudgetGoal.progress} max="100"></progress></td>
                        </tr>
                    ))}


                    </tbody>

                </table>
            </div>

        </div>

    </div>
  )
}

export default RecentActivity
