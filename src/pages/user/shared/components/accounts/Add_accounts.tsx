import { useState, useEffect } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabaseClient"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

const differentCards = ['GCash', 'PayMaya', 'BDO', 'BPI', 'PayPal', 'Cash', 'Others']

const AddAccounts = ({ selectedAccount, setSelectedAccount }: any) => {
    // IF THE SELECT FIELD IS OTHERS ADD INPUT
    const [others, setOthers] = useState("")
    const findOther = (selectedValue : string) => {
        if (selectedValue === 'Others'){
            return <Input name="input-bank" value={inputBank} onChange={(e) => setInputBank(e.target.value)} className="w-full h-12" placeholder="E-wallet or Bank name" type="text" />
        }
    }


    const [isLoading, setIsLoading] = useState(false)
    const [balance, setBalance] = useState("")
    const [inputBank, setInputBank] = useState("")
    const modal = document.getElementById('add_accounts') as HTMLDialogElement;

    useEffect(() => {
    if (selectedAccount) {
        // Editing an account
        setInputBank(selectedAccount.name);
        setBalance(selectedAccount.balance);
    } else {
        // Adding a new one
        setInputBank("");
        setBalance("");
        setOthers("");
    }
    }, [selectedAccount]);


    const handleSubmit  = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const selectedData = formData.get("select-bank");
        const balance = formData.get("input-balance");
        const otherBank = formData.get("input-bank");
        const bankToSave = selectedData === "Others" ? otherBank : selectedData;


        if (!selectedAccount && !selectedData || selectedData === "Select an E-wallet/Bank") {
            setIsLoading(false);
            toast.error("Select an E-Wallet/Bank to proceed.", {
            description: "Please try again",
            });

            modal?.close()
            return; // stop submission
        }

        const { data: { user }} = await supabase.auth.getUser();

        // IF THE USER SELECT A CARD OR ACCOUNT
        if (selectedAccount) {
            // UPDATE EXISTING ACCOUNT
            const { error } = await supabase
                .from("accounts")
                .update({
                    name: bankToSave,
                    balance: balance,
            })
                .eq("id", selectedAccount.id)
                .eq("user_id", user?.id);

                if (error) {
                    setIsLoading(false);
                    toast.error("Failed to update account!");
                    modal?.close()
                } else {
                    setIsLoading(false);
                    toast.success("Account updated successfully!");
                    modal?.close()
            }
        } else {

            const { error } = await supabase.from('accounts')
                .insert(
                    {
                        user_id: user?.id,
                        name : bankToSave,
                        balance: balance
                    }
                )


            if (error) {
                setIsLoading(false);
                toast.error("Something went wrong, please try again.", {
                    description: "Make sure you fill out all fields.",
                });

                modal?.close()

            } else {
                setIsLoading(false);

                toast.success("Account has been created!", {
                    description: "Your new account has been successfully added.",
                });

                setBalance("");
                setOthers("");
                setInputBank("");

                modal?.close()
            }
        }

    }

    return (

        <div className="flex items-center gap-3">
            <button className="cursor-pointer mt-1 bg-white text-black border border-black/15 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3" 
                onClick={() => {
                    setSelectedAccount(false);
                    
                    const modal = document.getElementById('add_accounts') as HTMLDialogElement;
                    modal?.showModal();
                }}><IoMdAdd/> Add account
            </button>

            <dialog id="add_accounts" className="modal">
                <div className="modal-box bg-white w-90">
                    <div className="modal-action -mt-3 -mr-3">
                        <form method="dialog">
                            <button className="cursor-pointer hover:bg-black/15 bg-white text-black border-none rounded-full text-xl"><IoClose/></button>
                        </form>
                    </div>
                    
                    <h3 className="font-bold text-lg py-2 text-center -mt-2 mb-2">{selectedAccount ? "Edit Account" : "New Account"}</h3>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                        { selectedAccount ? (
                                <>
                                    <Input type="text" value={inputBank} name="select-bank" className="w-full remove-arrow h-12 border-3 border-[#69247C]/70" readOnly/>
                                </>
                            ) : (
                                <>
                                    <select name="select-bank" required defaultValue="Select an E-wallet/Bank" className="select bg-white border-1 border-black/15 w-full h-12" onChange={(e) => setOthers(e.target.value)}>
                                        <option disabled={true}>Select an E-wallet/Bank</option>
                                        {differentCards.map((index) => {
                                            return (
                                                <option key={index} value={index}>{index}</option>
                                            )
                                        })}
                                    </select>
                                </>
                            )
                        }

                        {findOther(others)}
                        <Input value={balance} name="input-balance" className="w-full remove-arrow h-12" placeholder="Enter your balance" type="number" onChange={(e) => setBalance(e.target.value)} />
                        <button className="btn bg-[#69247C] text-white hover:bg-[#69247C]/90 border-none" type='submit' disabled={isLoading}>{isLoading ? ( <> <Spinner className="mr-2" /> Loading... </> ) : selectedAccount ? ("Update Account") : ( "Add Account" )}</button>

                    </form>

 

                </div>
            </dialog>
                
        </div>
  )
}

export default AddAccounts
