import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GradientButton from "@/components/GradientButton"
import Media from "@/shared/Media"

const ServiceSelect = () => (
  <FadeInWhenVisible className="flex flex-col">
    <div className="w-full flex flex-col">
      <div className="flex items-center w-full gap-[20px] py-3 md:py-3 md:py-[30px] border-b-[1px] border-b-[#282828] cursor-pointer">
        <Media
          link="/images/landing/group.svg"
          blurLink="/images/landing/group.png"
          containerClasses="w-[30px] aspect-[30/30]"
        />
        <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
          <p className="text-[16px] font-[400] leading-[27px]">Instagram + Threads</p>
          <div className="flex items-center text-[14px] justify-between">
            <p className="">54367284 pcs</p>
            <p className="flex gap-[5px]">
              from <span className="font-[500]">$0.5</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-[20px] py-3 md:py-[30px] border-b-[1px] border-b-[#282828]  cursor-pointer">
        <Media
          link="/images/landing/logos_telegram.svg"
          blurLink="/images/landing/logos_telegram.png"
          containerClasses="w-[30px] aspect-[30/30]"
        />
        <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
          <p className="text-[16px] font-[400] leading-[27px]">Telegram</p>
          <div className="flex items-center text-[14px] justify-between">
            <p className="">54367284 pcs</p>
            <p className="flex gap-[5px]">
              from <span className="font-[500]">$0.3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-[20px] py-3 md:py-[30px] border-b-[1px] border-b-[#282828] cursor-pointer">
        <Media
          link="/images/landing/logos_whatsapp.svg"
          blurLink="/images/landing/logos_whatsapp.png"
          containerClasses="w-[30px] aspect-[30/30]"
        />
        <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
          <p className="text-[16px] font-[400] leading-[27px]">WhatsApp</p>
          <div className="flex items-center text-[14px] justify-between">
            <p className="">54367284 pcs</p>
            <p className="flex gap-[5px]">
              from <span className="font-[500]">$0.3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-[20px] py-3 md:py-[30px] border-b-[1px] border-b-[#282828] cursor-pointer">
        <Media
          link="/images/landing/logos_youtube.svg"
          blurLink="/images/landing/logos_youtube.png"
          containerClasses="w-[30px] aspect-[30/30]"
        />
        <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
          <p className="text-[16px] font-[400] leading-[27px]">Google Yutube</p>
          <div className="flex items-center text-[14px] justify-between">
            <p className="">54367284 pcs</p>
            <p className="flex gap-[5px]">
              from <span className="font-[500]">$0.3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-[20px] py-3 md:py-[30px] border-b-[1px] border-b-[#282828] cursor-pointer">
        <Media
          link="/images/landing/logos_youtube.svg"
          blurLink="/images/landing/logos_youtube.png"
          containerClasses="w-[30px] aspect-[30/30]"
        />
        <div className="flex flex-col justify-start font-Poppins text-white flex-grow">
          <p className="text-[16px] font-[400] leading-[27px]">Tinder</p>
          <div className="flex items-center text-[14px] justify-between">
            <p className="">7767284 pcs</p>
            <p className="flex gap-[5px]">
              from <span className="font-[500]">$1.2</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <GradientButton>LOAD MORE</GradientButton>
  </FadeInWhenVisible>
)

export default ServiceSelect
