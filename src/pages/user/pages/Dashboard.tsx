import TotalSummary from "../dashboard/TotalSummary"
import RecentActivity from "../dashboard/RecentActivity"
import { ChartPieLegend } from "@/pages/user/charts/PieCharts"
import { ChartLineLegend } from "@/pages/user/charts/LineCharts"

const Dashboard = () => {
  return (
    <div className="bg-gray-100 px-5 w-full flex flex-col gap-5">
      {/* TOTAL CARDS */}
      <TotalSummary/>

      {/* RECENT ACTIVITY AND BUDGET GOAL */}
      <RecentActivity/>

      <div className="grid grid-cols-12 gap-3 mb-10">
        <div className="col-span-5">
          <ChartPieLegend/>
        </div>

        <div className="col-span-7">
          <ChartLineLegend/>
        </div>

      </div>


      

    </div>
  )
}

export default Dashboard
