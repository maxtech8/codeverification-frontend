import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const SideTab = () => (
  <FadeInWhenVisible className="grid grid-cols-2">
    <button
      type="button"
      className="col-span-1 flex flex-col text-white items-center
    transition duration-[300ms] hover:scale-[1.1]"
    >
      <p className="px-[10px]">ACTIVATIONS</p>
      <span className="w-full h-[3px] rounded-[2px] bg-gradient_b_overlay_1 mt-[5px]" />
    </button>
    <button
      type="button"
      className="col-span-1 flex flex-col text-white items-center
    transition duration-[300ms] hover:scale-[1.1]"
    >
      <p className="px-[10px]">RENT</p>
      <span className="w-full h-[3px] flex items-center mt-[5px]">
        <span className="bg-[#39393d] w-full h-[1px]" />
      </span>
    </button>
  </FadeInWhenVisible>
)

export default SideTab
