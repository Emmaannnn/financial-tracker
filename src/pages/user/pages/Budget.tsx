import TotalBudget from "../components/budget/TotalBudget"
import BudgetGoal from "../components/budget/BudgetGoal"
import SavingsGoal from "../components/budget/SavingsGoal"

const Budget = () => {
  return (
    <div className="px-4">
      <TotalBudget/>

      <div className="grid grid-cols-12 font-[Inter] gap-3 mt-5 mb-10">
        <BudgetGoal/>
        <SavingsGoal/>
      </div>

    </div>
  )
}

export default Budget
