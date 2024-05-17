import Media from "@/shared/Media"
import HeroDescription from "./HeroDescription"
import HeroImage from "./HeroImage"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const HeroSection = () => (
  <div className="relative mb-[90px] mt-9">
    <FadeInWhenVisible className="grid grid-cols-1 md:grid-cols-10 w-full h-[589px] relative z-[1]">
      <div className="w-full md:col-span-4">
        <HeroImage />
      </div>
      <div className="w-fullmd:col-span-6">
        <HeroDescription />
      </div>
    </FadeInWhenVisible>
    <FadeInWhenVisible className="display-none md:absolute md:top-[200px] md:left-[-250px] md:z-[1]">
      <Media
        link="/images/landing/bg_blur1.svg"
        blurLink="/images/landing/bg_blur.png"
        containerClasses="w-[200px] md:w-[352px] mx-auto aspect-[352/352] "
      />
    </FadeInWhenVisible>
    <div className="absolute right-[-280px] top-[0px]" />
    <div className="absolute top-[50%] right-[0px] translate-y-[-50%] cursor-pointer">
      <Media
        link="/images/landing/hero-nav.svg"
        blurLink="/images/landing/hero-nav.png"
        containerClasses="w-[10px] aspect-[10/45]"
      />
    </div>
  </div>
)

export default HeroSection
