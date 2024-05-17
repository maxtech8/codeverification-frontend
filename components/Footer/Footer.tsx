import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Media from "@/shared/Media"
import GradientText from "../GradientText"
import GradientButton from "../GradientButton"

const Footer = () => (
  <div
    className="w-full h-auto flex flex-col justify-between items-start text-white
        font-poppins text-[16px] text-white_4 pt-[50px]"
  >
    <div className="w-full grid grid-cols-1 md:grid-cols-11 px-4 3md:px-[50px] gap-[30px] pb-[30px] pt-[30px] border-t-[1px] border-white_4">
      <div className="col-span-3 flex flex-col justify-start">
        <Media
          link="/images/logo/logo.svg"
          blurLink="/images/logo/logo.png"
          containerClasses="w-[80px] md:w-[142px] aspect-[142/65] rounded-full"
        />
        <p className="text-white text-sm md:text-lg">
          {`If you have any question, \n
          please contact us at `}
          <br />
          <span>
            <GradientText className="text-[16px]">info@sms-activator</GradientText>
          </span>
        </p>

        <div className="flex gap-[30px] mt-[20px]">
          <FaInstagram />
          <FaFacebook />
          <FaXTwitter />
          <FaYoutube />
        </div>
        <GradientButton
          containerClasses="w-[150px] 3md:w-[225px] aspect-[225/60] rounded-[12px] p-[10px] mt-[20px] mx-[0px]
          text-xs 3md:text-base font-inter leading-[18px]"
        >
          DOWNLOAD OUR APPS
        </GradientButton>
      </div>
      <div className="col-span-2 flex flex-col jusitfy-start items-start gap-[20px]">
        <p className="text-white text-base text-center 3md:text-left 3md:text-lg">SMS-activate</p>
        <div className="w-[250px] 3md:w-auto text-xs 3md:text-lg grid grid-cols-2 border-1 gap-[10px] 3md:grid-cols-1">
          <a href="/app/">Auto the Service</a>
          <a href="/app/">Contacts</a>
          <a href="/app/">News</a>
          <a href="/app/">Projects rules</a>
        </div>
      </div>
      <div className="col-span-2 flex flex-col jusitfy-start items-start gap-[20px]">
        <p className="text-white text-base text-center 3md:text-left 3md:text-lg">Services</p>
        <div className="w-[250px] 3md:w-auto text-xs 3md:text-lg grid grid-cols-2 border-1 gap-[10px] 3md:grid-cols-1">
          <a href="/app/">Proxy</a>
          <a href="/app/">Free Numbers</a>
          <a href="/app/">Temporary mail</a>
        </div>
      </div>

      <div className="col-span-2 flex flex-col jusitfy-start items-start gap-[20px]">
        <p className="text-white text-base text-center 3md:text-left 3md:text-lg">For Partners</p>
        <div className="w-[250px] 3md:w-auto text-xs 3md:text-lg grid grid-cols-2 border-1 gap-[10px] 3md:grid-cols-1">
          <a href="/app/">Loyalty program</a>
          <a href="/app/">Affiliate program</a>
          <a href="/app/">SMS-Activate. API</a>
          <a href="/app/">Earn on SIM cards</a>
          <a href="/app/">Bug Bounty</a>
        </div>
      </div>

      <div className="col-span-2 flex flex-col jusitfy-start items-start gap-[20px]">
        <p className="text-white text-base text-center 3md:text-left 3md:text-lg">
          Partner software
        </p>
        <div className="w-[250px] 3md:w-auto text-xs 3md:text-lg grid grid-cols-2 border-1 gap-[10px] 3md:grid-cols-1">
          <a href="/app/">Marketplace of accounts</a>
          <a href="/app/">Our partners</a>
          <a href="/app/">Knowledge base.</a>
          <a href="/app/">Technical support</a>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col 3md:flex-row justify-between items-center border-t-[2px] text-[14px] px-4 md:px-[50px] py-[40px] gap-[20px] border-gray_1">
      <div className="text-[16px]">Copyright © 2024</div>
      <div className="flex flex-col 3md:flex-row justify-between items-center gap-[5px] 3md:gap-[30px] ">
        <a href="/app/">Privacy policy</a>
        <a href="/app/">Money refund policy</a>
        <a href="/app/">Payment policy</a>
        <a href="/app/">Terms and conditions</a>
        <a href="/app/">Return policy</a>
      </div>
    </div>
  </div>
)

export default Footer
