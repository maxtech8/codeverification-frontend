import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"
import SidetTab from "./SidetTab"

const VirtualNumber = () => (
  <FadeInWhenVisible className="mt-[50px]">
    <button
      type="button"
      className="font-[Jost] font-bold text-[14px] p-[10px] rounded-[25px] h-[30px] 
      bg-[white] text-black flex items-center
      transition duration-[300ms] hover:scale-[1.1]"
    >
      EARN WITH US
    </button>
    <p className="font-space_grotesk font-500 text-[36px] text-white mt-[30px]">
      Affiliate program
    </p>
    <FadeInWhenVisible className="flex flex-col mt-[30px]">
      <SidetTab />

      <FadeInWhenVisible className="grid grid-cols-12 w-full mt-[30px]">
        <div className="col-span-8">
          <p className="mt-[30px] font-Poppins font-[400] text-[24px] leading-[24px] text-[#589CFF]">
            Earn with SMS-Activate Together <br />
          </p>
          <p className="mt-[20px] font-Poppins font-[400] text-[48px] leading-[100%] text-white w-[110%]">
            Spread referral link and get paid
            <br />
          </p>
          <p className="mt-[40px] font-Poppins font-[400] text-[16px] leading-[24px] text-white w-[150%]">
            <span className="font-bold">
              Get paid for users attracted by you! <br />
            </span>
            For each active user you will receive up to 20% of his expenses!
            <br />
            Everyone registered with your link will receive 10% cashback on the first recharge up to
            3000 usd.
          </p>
          <p className="my-[40px] font-Poppins font-[400] text-[16px] leading-[24px] text-white">
            {" "}
            Detailed affiliate program terms.
          </p>
          <p className="mt-[40px] font-Poppins font-[400] text-[16px] leading-[24px] text-white w-[150%]">
            You do not need to get any promo materials ready, as our designers have already created
            <br /> banners of different formats for any advertising campaign.
          </p>
        </div>
        <div className="col-span-4">
          <Media
            link="/images/affilians/locker.svg"
            blurLink="/images/affilians/locker.png"
            containerClasses="w-full aspect-[386/386]"
          />
        </div>
      </FadeInWhenVisible>
    </FadeInWhenVisible>
  </FadeInWhenVisible>
)

export default VirtualNumber
