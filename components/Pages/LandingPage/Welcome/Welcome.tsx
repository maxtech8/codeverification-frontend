import Media from "@/shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import Main from "./Main"

const Welcome = () => (
  <div className="w-[290px] 3md:w-full  flex flex-col">
    <FadeInWhenVisible className="w-full flex flex-col justify-start items-center mt-[100px]">
      <div
        className="w-full h-[155px] rounded-[10px] px-2
          flex justify-between items-center 
          bg-[url('/images/landing/Rectangle.png')] bg-center bg-cover"
      >
        <div
          className="flex flex-col justify-start
         items-center gap-[20px]"
        >
          <p className="w-max md:w-auto font-space_grotesk font-500 text-lg 3md:text-[27px] text-white leading-[20px] 3md:leading-[100%]">
            Thousands of accounts per day
          </p>
          <p className="w-max font-poppins font-normal text-sm 3md:text-lg text-white">
            Just choose software for your tasks!
          </p>
        </div>
        <div>
          <Media
            link="/images/landing/data_management.png"
            blurLink="/images/landing/data_management.svg"
            containerClasses="w-[100%] aspect-[191/155]"
          />
        </div>
      </div>
    </FadeInWhenVisible>
    <Main />
  </div>
)

export default Welcome
