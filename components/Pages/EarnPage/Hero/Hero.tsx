import ServiceSelection from "@/components/ServiceSelection"
import MonetizingMobile from "./MonetizingMobile"
import SimCard from "./SimCard"

const Hero = () => (
  <div className="w-[300px] 3md:w-full grid grid-cols-1 md:grid-cols-12 gap-[50px] mt-[30px] md:mt-[50px]">
    <div className="w-fit col-span-8">
      <MonetizingMobile />
      <SimCard />
    </div>
    <div className="w-[290px] mr-4 3md:col-span-4">
      <ServiceSelection />
    </div>
  </div>
)

export default Hero
