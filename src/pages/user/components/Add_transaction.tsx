import { IoMdAdd } from "react-icons/io";

export const AddExpenseTransaction = () => {
  return (
        <div className="flex items-center gap-3">
            <button className="cursor-pointer mt-1 bg-white text-black border border-black/15 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3" 
                onClick={() => {
                    const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
                    modal?.showModal();
                }}><IoMdAdd/> Add
            </button>

            <dialog id="my_modal_1" className="modal bg-white">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Hello Expenses!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
                
        </div>
  )
}


export const AddIncomeTransaction = () => {
  return (
        <div className="flex items-center gap-3">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="cursor-pointer mt-1 bg-white text-black border border-black/15 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-3" 
                onClick={() => {
                    const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
                    modal?.showModal();
                }}><IoMdAdd/> Add
            </button>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg">Hello Income!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
            </dialog>
                
        </div>
  )
}

