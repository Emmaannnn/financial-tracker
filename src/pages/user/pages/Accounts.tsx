import AddAccounts from "@/pages/user/shared/components/Add_accounts"
import FetchAccounts from "../shared/components/FetchAccounts"

const Accounts = () => {

  return (
    <div className="px-4">
        <div className="mb-5">
          <AddAccounts/>
        </div>
        <FetchAccounts/>

    </div>
  )
}

export default Accounts
