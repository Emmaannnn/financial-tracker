import { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabaseClient"
import Swal from 'sweetalert2'
import { Spinner } from "@/components/ui/spinner"

const differentCards = ['GCash', 'PayMaya', 'BDO', 'BPI', 'PayPal', 'Cash', 'Others']

const Add_accounts = () => {
    // IF THE SELECT FIELD IS OTHERS ADD INPUT
    const [others, setOthers] = useState("")
    const findOther = (selectedValue : string) => {
        if (selectedValue === 'Others'){
            return <Input name="input-bank" value={inputBank} onChange={(e) => setInputBank(e.target.value)} className="w-full h-12" placeholder="E-wallet or Bank name" type="text" />
        }
    }


    const [isLoading, setIsLoading] = useState(false);
    const [balance, setBalance] = useState("")
    const [inputBank, setInputBank] = useState("")

    const enrollCard = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const selectedData = formData.get("select-bank");
        const balance = formData.get("input-balance");
        const otherBank = formData.get("input-bank");
        const bankToSave = selectedData === "Others" ? otherBank : selectedData;


        const { data: { session }} = await supabase.auth.getSession();

        const { error } = await supabase.from('accounts')
            .insert(
                {
                    user_id: session?.user.id,
                    name : bankToSave,
                    balance: balance
                }
            )
            
        if (error) {
            setIsLoading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong, please retry",
            });
            console.error("Insert error:", error);
            
        } else {
            setIsLoading(false);

            Swal.fire({
                title: "Successfully!",
                icon: "success",
                draggable: true
            });

            setBalance("");
            setOthers("");
            setInputBank("");
        }
    } 

    return (

        <div className="flex items-center gap-3">
            <button className="cursor-pointer mt-1 bg-white text-black border border-black/15 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3" 
                onClick={() => {
                    const modal = document.getElementById('add_accounts') as HTMLDialogElement;
                    modal?.showModal();
                }}><IoMdAdd/> Add
            </button>

            <dialog id="add_accounts" className="modal">
                <div className="modal-box bg-white w-90">
                    <div className="modal-action -mt-3 -mr-3">
                        <form method="dialog">
                            <button className="cursor-pointer hover:bg-black/15 bg-white text-black border-none rounded-full text-xl"><IoClose/></button>
                        </form>
                    </div>
                    
                    <h3 className="font-bold text-lg py-2 text-center -mt-2 mb-2">New account</h3>

                    <form onSubmit={enrollCard} className='flex flex-col gap-2'>

                        <select name="select-bank" defaultValue="Select an E-wallet/Bank" className="select bg-white border-1 border-black/15 w-full h-12" onChange={(e) => setOthers(e.target.value)}>
                            <option disabled={true}>Select an E-wallet/Bank</option>
                            {differentCards.map((index) => {
                                return (
                                    <option key={index} value={index}>{index}</option>
                                )
                            })}
                        </select>

                        {findOther(others)}
                        <Input value={balance} name="input-balance" className="w-full remove-arrow h-12" placeholder="Enter your balance" type="number" onChange={(e) => setBalance(e.target.value)} />
                        
                        <button className="btn bg-[#69247C] text-white hover:bg-[#69247C]/90 border-none" type='submit' disabled={isLoading}>{isLoading ? <><Spinner className='mr-2'/> Loading...</> : "Add account"}</button>

                    </form>

 

                </div>
            </dialog>
                
        </div>
  )
}

export default Add_accounts
