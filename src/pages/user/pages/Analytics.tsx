import TotalSummary from "../dashboard/TotalSummary"
import { ChartLineLegend } from "../charts/LineCharts"
import { ChartPieLegend } from "../charts/PieCharts"
import { ChartBarLegend } from "../charts/BarCharts"
import { ChartAreaLegend } from "../charts/AreaCharts"
import { ChartRadialLegend } from "../charts/RadialCharts"


const Analytics = () => {
  return (

    <div className="px-4">
      <TotalSummary/>

      <div className="grid grid-cols-12 gap-3 mt-5 mb-10">
        
        <div className="col-span-6">
          <ChartPieLegend/>
        </div>

        <div className="col-span-6">
          <ChartLineLegend/>
        </div>

        <div className="col-span-4">
          <ChartBarLegend/>
        </div>

        <div className="col-span-4">
          <ChartAreaLegend/>
        </div>

        <div className="col-span-4">
          <ChartRadialLegend/>
        </div>

      </div>

    </div>

  )
}

export default Analytics
