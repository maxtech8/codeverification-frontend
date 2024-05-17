import GradientButton from "@/components/GradientButton"
import ServiceButton from "./ServiceButton"
import lists from "./serviceLists.json"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const PopularService = () => (
  <FadeInWhenVisible
    className="flex flex-col jsutify-start gap-[30px]
    mt-[100px]"
  >
    <button
      type="button"
      className="flex items-center justify-center
      font-jost font-bold text-black
      text-[14px] p-[10px] rounded-[25px] w-[150px] h-[30px] bg-[white]
      transition duration-[300ms] hover:scale-[1.1]"
    >
      OUR SERVICE
    </button>
    <p
      className="font-space_grotesk font-500 text-white 
    text-[24px] 3md:text-[36px] leading-[130%]"
    >
      We provide phone numbers for all popular services
    </p>
    <div className="w-full">
      <div
        className="w-[290px] md:w-full grid grid-cols-3 
      gap-[30px]"
      >
        {lists.map((list, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ServiceButton data={list} key={i} />
        ))}
      </div>
      <div className="w-[290px] md:w-full grid grid-cols-3">
        <div className="col-span-1" />
        <GradientButton
          containerClasses=" w-[100px] 3md:w-[225px] h-[60px] rounded-[12px] p-[10px] text-center text-[14px] 3md:text-[16px] mt-[10px]
        "
        >
          LOAD MORE
        </GradientButton>
      </div>
    </div>
  </FadeInWhenVisible>
)

export default PopularService
