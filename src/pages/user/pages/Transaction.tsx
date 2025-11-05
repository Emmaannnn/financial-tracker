import Transaction_expenses from "../dtransaction/Transaction_expenses"
import Transaction_income from "../dtransaction/Transaction_income"

const Transaction = () => {
  return (
    <div className="mx-4">
      <div className="grid grid-cols-12 gap-4 mb-10">
        <Transaction_expenses/>
        <Transaction_income/>
      </div>
    </div>
  )
}

export default Transaction
