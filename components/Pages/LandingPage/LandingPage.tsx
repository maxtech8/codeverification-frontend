import Layout from "@/components/Layouts"
import HeroSection from "./HeroSection"
import PhoneNumberService from "./PhoneNumberService"
import PopularService from "./PopularServies"
import Advantages from "./Advantages"
import FaqDesktop from "./FAQDesktop/FAQDesktop"
import Welcome from "./Welcome"
import PageContainer from "@/components/PageContainer"

const LandingPage = () => (
  <Layout type="base">
    <HeroSection />
    <PhoneNumberService />
    <PageContainer>
      <PopularService />
      <Advantages />
      <Welcome />
      <FaqDesktop />
    </PageContainer>
  </Layout>
)

export default LandingPage
