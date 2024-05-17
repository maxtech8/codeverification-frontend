import SearchService from "./SearchService"
import Multiservice from "./Multiservice"
import SideTab from "./SideTab"
import ServiceSelect from "./ServiceSelect"
import PartnersAndMore from "./PartnersAndMore"

const ServiceSelection = () => (
  <div className="flex flex-col">
    <SideTab />
    <Multiservice />
    <SearchService />
    <ServiceSelect />
    <PartnersAndMore />
  </div>
)

export default ServiceSelection
