import CTASecton from "./CTASection"
import LanguageSetting from "./LanguageSetting"
import useIsMobile from "@/hooks/useIsMobile"

const TopHeader = () => {
  const isMobile = useIsMobile()
  return (
    <div>
      {!isMobile && (
        <div className="w-full flex justify-between bg-black itmes-center px-4 gap-[20px] h-[50px] flex items-center shadow-white_shadow_15">
          <CTASecton />
          <LanguageSetting />
        </div>
      )}
    </div>
  )
}
export default TopHeader
