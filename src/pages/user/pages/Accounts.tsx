import { useState } from 'react'
import AddAccounts from "@/pages/user/shared/components/accounts/Add_accounts"
import FetchAccounts from "../shared/components/accounts/Fetch_Accounts"
// import UpdateAccount from "../shared/components/accounts/Update_account"

const Accounts = () => {
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  // HANDLE MODAL TO GET ID FROM THE FETCH DATA
  const handleModal = (account: any) => {
    setSelectedAccount(account);
    const modal = document.getElementById("add_accounts") as HTMLDialogElement;
    modal?.showModal();
  };
  
  return (
    <div className="px-4">
        <div className="mb-5">
          <AddAccounts selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount} />
        </div>
        <FetchAccounts handleModal={handleModal}/>
        {/* <UpdateAccount/> */}

    </div>
  )
}

export default Accounts
