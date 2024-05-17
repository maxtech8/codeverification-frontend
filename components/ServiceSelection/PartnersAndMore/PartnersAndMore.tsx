import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const PartnersAndMore = () => (
  <FadeInWhenVisible className="mt-[100px] md:mt-[40px]">
    <p className="font-space_grotesk text-[24px] font-[400] leading-[27px] text-white">
      Our partners and more
    </p>
    <div className="grid 3md:grid-cols-2 gap-[20px] mt-[30px]">
      <FadeInWhenVisible className="flex flex-col items-center justify-center bg-gray_1 rounded-[10px] aspect-[2/1] 3md:aspect-[1/1]">
        <Media
          link="/images/landing/proxystore.svg"
          blurLink="/images/landing/proxystore.png"
          containerClasses="w-[30px] aspect-[1/1]"
        />
        <p className="text-center text-white mt-[20px]">
          Marketplace <br /> proxy
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="flex flex-col items-center justify-center bg-gray_1 rounded-[10px] aspect-[2/1] 3md:aspect-[1/1]">
        <Media
          link="/images/landing/logos_telegram.svg"
          blurLink="/images/landing/logos_telegram.png"
          containerClasses="w-[30px] aspect-[1/1]"
        />
        <p className="text-center text-white mt-[20px]">
          Official <br />
          telegram bot
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="flex flex-col items-center justify-center bg-gray_1 rounded-[10px] aspect-[2/1] 3md:aspect-[1/1]">
        <Media
          link="/images/landing/logo_hstock.svg"
          blurLink="/images/landing/logo_hstock.png"
          containerClasses="w-[30px] aspect-[1/1]"
        />
        <p className="text-center text-white mt-[20px]">
          Marketplace of <br /> accounts
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="flex flex-col items-center justify-center bg-gray_1 rounded-[10px] aspect-[2/1] 3md:aspect-[1/1]">
        <Media
          link="/images/landing/logos_sim.svg"
          blurLink="/images/landing/logos_sim.png"
          containerClasses="w-[30px] aspect-[1/1]"
        />
        <p className="text-center text-white mt-[20px]">
          Earn on SIM <br />
          cards!
        </p>
      </FadeInWhenVisible>
    </div>
  </FadeInWhenVisible>
)

export default PartnersAndMore
