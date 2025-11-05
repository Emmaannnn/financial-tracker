import TotalSummary from "../dashboard/TotalSummary"
import RecentActivity from "../dashboard/RecentActivity"

const Dashboard = () => {
  return (
    <div className="bg-gray-100 h-screen px-5 w-full flex flex-col gap-5">
      {/* TOTAL CARDS */}
      <TotalSummary/>

      {/* RECENT ACTIVITY AND BUDGET GOAL */}
      <RecentActivity/>

    </div>
  )
}

export default Dashboard
