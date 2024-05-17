import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import lists from "./advantageLists.json"

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
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-1">
            <p
              className="font-space_grotesk font-500 text-white 
            text-lg md:text-2xl
            flex gap-[10px] md:gap-[30px]"
            >
              <span>0{i + 1}</span>
            </p>
          </div>
          <div className="col-span-11">
            <p
              className="font-space_grotesk font-500 text-white 
            text-lg md:text-2xl
            flex gap-[10px] md:gap-[30px]"
            >
              {list.title}
            </p>
            <p
              className="w-full overflow-hidden font-poppins font-400 text-white 
            text-xs md:text-lg"
            >
              {list.detail}
            </p>
          </div>
        </div>
      </FadeInWhenVisible>
    ))}
  </div>
)

export default Advantages
