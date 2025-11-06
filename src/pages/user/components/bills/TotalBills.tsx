import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

const TotalBills = () => {
  return (
    <div>
        <div className="md:grid md:grid-cols-12 flex flex-wrap w-full gap-3">
            
            {/* Total Bills */}
            <div className="col-span-3 flex justify-between items-center w-full bg-white shadow-sm rounded-lg h-20 px-4 py-3">
              <div className="balance">
                <div className="title font-[Inter] font-bold text-black/80">
                  <h1>Total Bills</h1>
                  <h6 className="text-[8px]">(This Month)</h6>
                </div>
      
                <div className="body w-full">
                  <h4 className="flex items-center gap-2">₱ 42,500.00</h4>
                </div>
              </div>
      
              <div className="balance-icon">
                <GiTakeMyMoney className="text-4xl bg-[#69247C] text-white bg-linear-65 from-purple-500 to-pink-500 rounded-md p-1 shadow-lg"/>
              </div>
            </div>
      
            {/* Total Amout Due */}
            <div className="col-span-3 flex justify-between items-center w-full bg-white shadow-sm rounded-lg h-20 px-4 py-3">
              <div className="balance">
                <div className="title font-[Inter] font-bold text-black/80">
                  <h1>Total Amout Due</h1>
                  <h6 className="text-[8px]">(This Month)</h6>
                </div>
      
                <div className="body w-full">
                  <h4 className="flex items-center gap-2">₱ 42,500.00</h4>
                </div>
              </div>
      
              <div className="balance-icon">
                <GiReceiveMoney className="text-4xl bg-[#69247C] text-white bg-linear-65 from-purple-500 to-pink-500 rounded-md p-1 shadow-lg"/>
              </div>
            </div>
      
            {/* Paid Bills */}
            <div className="col-span-3 flex justify-between items-center w-full bg-white shadow-sm rounded-lg h-20 px-4 py-3">
              <div className="balance">
                <div className="title font-[Inter] font-bold text-black/80">
                  <h1>Paid Bills</h1>
                  <h6 className="text-[8px]">(This Month)</h6>
                </div>
      
                <div className="body w-full">
                  <h4 className="flex items-center gap-2">₱ 42,500.00</h4>
                </div>
              </div>
      
              <div className="balance-icon">
                <GiPayMoney  className="text-4xl bg-[#69247C] text-white bg-linear-65 from-purple-500 to-pink-500 rounded-md p-1 shadow-lg"/>
              </div>
            </div>


            {/* Unpaid */}
            <div className="col-span-3 flex justify-between items-center w-full bg-white shadow-sm rounded-lg h-20 px-4 py-3">
              <div className="balance">
                <div className="title font-[Inter] font-bold text-black/80">
                  <h1>Unpaid</h1>
                  <h6 className="text-[8px]">(This Month)</h6>
                </div>
      
                <div className="body w-full">
                  <h4 className="flex items-center gap-2">₱ 42,500.00</h4>
                </div>
              </div>
      
              <div className="balance-icon">
                <GiPayMoney  className="text-4xl bg-[#69247C] text-white bg-linear-65 from-purple-500 to-pink-500 rounded-md p-1 shadow-lg"/>
              </div>
            </div>
       </div>
    </div>
  )
}

export default TotalBills
