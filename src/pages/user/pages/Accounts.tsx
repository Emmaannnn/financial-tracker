import AddAccounts from "@/pages/user/shared/components/accounts/Add_accounts"
import FetchAccounts from "../shared/components/accounts/Fetch_Accounts"
// import UpdateAccount from "../shared/components/accounts/Update_account"

const Accounts = () => {
  
  return (
    <div className="px-4">
        <div className="mb-5">
          <AddAccounts />
        </div>
        <FetchAccounts />
        {/* <UpdateAccount/> */}

    </div>
  )
}

export default Accounts
