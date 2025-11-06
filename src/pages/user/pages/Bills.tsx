import TotalBills from "../components/bills/TotalBills"
import ListBills from "../components/bills/ListBills"
import HistoryBills from "../components/bills/HistoryBills"

const Bills = () => {
  return (
    <div className="px-4">
      <TotalBills/>
      <ListBills/>
      <HistoryBills/>
    </div>
  )
}

export default Bills
