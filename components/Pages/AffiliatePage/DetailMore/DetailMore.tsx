import ServiceSelection from "@/components/ServiceSelection"
import VirtualNumber from "./VirtualNumber"

const DetailMore = () => (
  <div className="grid grid-cols-12 gap-[50px] mt-[50px]">
    <div className="col-span-8">
      <VirtualNumber />
    </div>
    <div className="col-span-4">
      <ServiceSelection />
    </div>
  </div>
)

export default DetailMore
