import Media from "@/shared/Media"

const HeroImage = () => (
  <div className="mt-[20px]">
    <Media
      link="/images/landing/hero-phone.png"
      blurLink="/images/landing/hero-phone.svg"
      containerClasses="w-[280px] 3md:w-full aspect-[455/534] absolute mx-auto md:left-[-50px]"
    />
  </div>
)

export default HeroImage
