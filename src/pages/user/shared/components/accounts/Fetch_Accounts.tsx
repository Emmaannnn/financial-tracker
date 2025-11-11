import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"

// DISPLAY ALL ACCOUNTS
const fetch_Accounts = ( { handleModal } : any ) => {
  const [accounts, setAccounts] = useState<any>([])
  const [isLoading, isSetLoading] = useState<any>(false)

  useEffect(() => {
    // DISPLAY | FETCH DATA FROM DATABASE
    const fetchAccount = async () => {
      isSetLoading(true)
      // GET SESSION
      const { data: { user } } = await supabase.auth.getUser();
      const userID = user?.id;

      // RETRIEVE DATA FFOM ACCOUNTS
      const { data, error } = await supabase.from('accounts')
        .select('*')
        .eq('user_id', userID)


      if (error) {
        console.error("Error: ", error)
        isSetLoading(true)
      } else {
        setAccounts(data)
        isSetLoading(false)
      }

    }

    fetchAccount();

  }, [])

  // DELETE ACCOUNT FUNCTION
  const deleteAccount = async (rowID : any) => {
    const { error } = await supabase.from('accounts')
      .delete()
      .eq('id', rowID)

      if (error) {
        toast.error("Deleted account unsuccessful")
    } else {
        toast.success("Deleted account successfully")
    }
  }


  return (
    <div>
      {isLoading ? (
          <div className="flex justify-center items-center lg:h-100">
            <Spinner className='size-8'/>
          </div>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {accounts.map((account: {id: string; name: string; balance: number; created_at: string}) => {
          const dateObject = new Date(account.created_at);
          const formattedDate = dateObject.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });

          const formattedTime = dateObject.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          }); // Example: 01:01 AM (depending on local timezone)

          return(
            <div className="col-span-1 font-[Inter] p-4 rounded-lg shadow-sm bg-white" key={account.id}>
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <div className="flex flex-col gap-2">
                    <h1 className='font-bold text-xl'>{account.name}</h1>
                    <h3><span className='font-semibold text-black/80 text-sm'>Balance:</span> ₱ {Number(account.balance).toLocaleString()}</h3>
                    <h6 className='text-[11px] text-black/70'>{formattedDate} at {formattedTime} </h6>
                  </div>
                </div>

                <div className="col-span-1 flex justify-center items-center gap-2">

                  {/* EDIT */}
                  <button id="add_accounts" data-id={account.id} onClick={() => {
                    handleModal(account)
                    }}
                      className='p-1 text-black hover:text-blue-500 cursor-pointer'>
                      <FaRegEdit/>
                  </button>

                  {/* DELETE */}
                  <button onClick={() => deleteAccount(account.id)} className='p-1 text-black hover:text-red-500 cursor-pointer'><RiDeleteBin6Line/></button>
                </div>
      

              </div>
            </div>
        )})}
      </div>
      )}
    </div>
  )
}

export default fetch_Accounts
