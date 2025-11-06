import TotalAnalytics from "../components/analytics/TotalAnalytics"
import { ChartLineLegend } from "../components/charts/LineCharts"
import { ChartPieLegend } from "../components/charts/PieCharts"
import { ChartBarLegend } from "../components/charts/BarCharts"
import { ChartAreaLegend } from "../components/charts/AreaCharts"
import { ChartRadialLegend } from "../components/charts/RadialCharts"



const Analytics = () => {
  return (

    <div className="px-4">
      <TotalAnalytics/>

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
