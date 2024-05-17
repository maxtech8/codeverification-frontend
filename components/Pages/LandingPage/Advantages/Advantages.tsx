import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import lists from "./advantageLists.json"
import Advantage from "@/shared/Advantage"

const Advantages = () => (
  <div className="w-[290px] md:w-full flex flex-col justify-start mt-[100px]">
    <FadeInWhenVisible>
      <button
        type="button"
        className="flex items-center justify-center
      font-jost font-bold text-black
      text-[14px] p-[10px] rounded-[25px] w-[150px] h-[30px] bg-[white]
      transition duration-[300ms] hover:scale-[1.1]"
      >
        WHY WE ARE
      </button>
      <p
        className="font-space_grotesk text-white
    font-[400] text-[28px] md:text-[36px] leading-[115%] py-[30px] border-b-[2px] border-gray_1"
      >
        Advantages
      </p>
    </FadeInWhenVisible>
    {lists.map((list, i) => (
      <FadeInWhenVisible
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        className="w-full flex flex-col justify-cneter items-start py-[15px] 3md:py-3 border-b-[1px] border-gray_1"
      >
        <Advantage list={list} i={i} />
      </FadeInWhenVisible>
    ))}
  </div>
)

export default Advantages
