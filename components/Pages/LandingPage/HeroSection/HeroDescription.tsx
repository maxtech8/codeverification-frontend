import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GradientButton from "@/components/GradientButton"

const HeroDescription = () => (
  <FadeInWhenVisible className="mt-[50px] text-white w-[300px] 3md:w-[550px]">
    <p
      className="flex items-center leading-[100%] gap-[10px] font-Poppins f
    ont-[500] text-[16px] 3md:text-[24px] text-[#589CFF]"
    >
      TECHONOLOGY SOLUTIONS
      <span className="w-[40px] h-[1px] bg-[#589CFF]" />
    </p>
    <p className="text-[32px] 3md:text-[48px] font-[500] leading-[99%] font-space_grotesk leading-[50px] mt-[20px]">
      Reactivation at the activation price
    </p>
    <p className="text-[16px] font-[600] font-OpenSans leading-[100%] mt-[50px]">
      Risus orci nam morbi auctor sollicitudin. Ornare natoque tincidunt
      <br />
      diam a elementum bibendum euismod ornare morbi. Egestas in magna
      <br />
      vitae sed morbi elementum. A hendrerit eu lobortis sit facilisis. A id.
    </p>
    <GradientButton containerClasses="w-11/12  mt-[80px]">KNOW MORE</GradientButton>
  </FadeInWhenVisible>
)

export default HeroDescription
