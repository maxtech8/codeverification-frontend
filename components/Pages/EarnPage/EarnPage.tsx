import Layout from "@/components/Layouts"
import Hero from "./Hero"
import PageContainer from "@/components/PageContainer"
import Advantage from "./Advantage"
import Work from "./Work"
import Faq from "./Faq"

const EarnPage = () => (
  <Layout type="base">
    <Hero />
    <PageContainer>
      <Advantage />
      <Work />
      <Faq />
    </PageContainer>
  </Layout>
)
export default EarnPage
