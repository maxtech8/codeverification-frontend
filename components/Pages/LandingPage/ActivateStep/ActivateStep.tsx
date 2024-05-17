import Media from "@/shared/Media"
import Card from "./Card"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const ActivateStep = () => (
  <FadeInWhenVisible className="mt-[100px] w-[300px] md:w-full">
    <button
      type="button"
      className="font-[Jost] font-bold text-[14px] 
      p-[10px] rounded-[25px] h-[30px] bg-[white] 
      text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      HOW IT WORKS
    </button>
    <div className="mt-[50px]">
      <p className="font-space_grotesk font-500 text-2xl md:text-4xl text-white">
        SMS-Activate is easy!
      </p>
      <div className="mt-[40px] flex flex-col">
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center relative">
            <div className="flex flex-col items-center">
              <Card number=".01" description="Select service and country" />
              <div className="w-[1px] h-[30px] bg-gray_1" />
              <div
                className="w-[23px] h-[23px] bg-blue_1 flex justify-center items-center 
              absolute top-[100%] translate-y-[-50%] z-[1] rounded-full"
              >
                <div className="w-[21px] h-[21px] bg-white flex justify-center items-center rounded-full">
                  <div className="w-[15px] h-[15px] bg-blue_1 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center relative">
            <div className="flex flex-col items-center mr-4 3md:mr-0">
              <Card number=".03" description="Select service and country" />
              <div className="w-[1px] h-[30px] bg-gray_1" />
              <div
                className="w-[23px] h-[23px] bg-blue_1 flex justify-center items-center 
              absolute top-[100%] translate-y-[-50%] z-[5] rounded-full"
              >
                <div className="w-[21px] h-[21px] bg-white flex justify-center items-center rounded-full">
                  <div className="w-[15px] h-[15px] bg-blue_1 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] md:w-[780px] h-[0px]">
          <Media
            link="images/landing/dotted-divider.svg"
            blurLink="images/landing/dotted-divider.svg"
            containerClasses="w-[300px] md:w-full aspect-[50/1] translate-y-[-50%]"
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-end items-center relative">
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-[30px] bg-gray_1" />
              <div
                className="w-[23px] h-[23px] bg-blue_1 flex justify-center items-center 
              absolute top-[0%] translate-y-[-50%] z-[5] rounded-full"
              >
                <div className="w-[21px] h-[21px] bg-white flex justify-center items-center rounded-full">
                  <div className="w-[15px] h-[15px] bg-blue_1 rounded-full" />
                </div>
              </div>
              <Card number=".02" description="Select service and country" />
            </div>
          </div>
          <div className="flex justify-end items-center relative">
            <div className="flex flex-col items-center mr-4 3md:mr-0">
              <div className="w-[1px] h-[30px] bg-gray_1" />
              <div
                className="w-[23px] h-[23px] bg-blue_1 flex justify-center items-center 
              absolute top-[0%] translate-y-[-50%] z-[5] rounded-full"
              >
                <div className="w-[21px] h-[21px] bg-white flex justify-center items-center rounded-full">
                  <div className="w-[15px] h-[15px] bg-blue_1 rounded-full" />
                </div>
              </div>
              <Card number=".04" description="Select service and country" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeInWhenVisible>
)

export default ActivateStep
