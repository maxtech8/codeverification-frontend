import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GradientButton from "../../../GradientButton"
import GradientText from "../../../GradientText"

const Main = () => (
  <FadeInWhenVisible
    className="w-full h-[620px] rounded-[10px] p-[60px_50px] mt-[100px]
      flex flex-col justify-start items-start  
        bg-[url('/images/landing/member.png')] bg-center bg-cover"
  >
    <div className="">
      <button
        type="button"
        className="flex items-center justify-center
            font-jost font-bold text-black
            text-[14px] p-[10px] ml-[20px] rounded-[25px] w-[180px] h-[30px] bg-[white]
            transition duration-[300ms] hover:scale-[1.1]"
      >
        NICE TO MEET YOU
      </button>
    </div>
    <div className="mt-[20px] 3md:mt-[50px] font-space_grotesk text-2xl text-center 3md:text-left 3md:text-[36px] text-white leading-[100%]">
      <p>Welcome to SMS-Activate!</p>
    </div>
    <div className="flex justify-start items-center mt-[20px]">
      <GradientText className="text-5xl 3md:text-[98px]">5M+</GradientText>
      <p className="pl-[20px] font-poppins text-base 3md:text-2xl xl:text-3xl font-400 text-white">
        new users for 2023
      </p>
    </div>

    <p className="font-poppins text-sm 3md:text-xl xl:text-2xl font-400 text-white mt-5 3md:mt-[60px]">
      {`We are developing our service, adding new features and creating the best \n
      conditions so that virtual numbers are available to everyone. Participate in the \n
      loyalty program to buy numbers with the maximum benefit!`}
    </p>

    <GradientButton
      containerClasses="w-[150px] 3md:w-[225px] aspect-[225/60] rounded-[12px] p-[10px] mt-[50px] mx-auto
          text-xs md:text-base font-inter"
    >
      BECOME A MEMEBER
    </GradientButton>
  </FadeInWhenVisible>
)

export default Main
