import ServiceSelection from "@/components/ServiceSelection"
import ActivateStep from "../ActivateStep"
import VirtualNumber from "./VirtualNumber"

const PhoneNumberService = () => (
  <div className="w-[300px] 3md:w-full grid grid-cols-1 md:grid-cols-12 gap-[50px]">
    <div className="w-fit col-span-8">
      <VirtualNumber />
      <ActivateStep />
    </div>
    <div className="w-[290px] mr-4 3md:col-span-4">
      <ServiceSelection />
    </div>
  </div>
)

export default PhoneNumberService
