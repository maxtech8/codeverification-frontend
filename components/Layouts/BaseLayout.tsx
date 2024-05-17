import Container from "../Container"
import Footer from "../Footer"
import BaseHeader from "../Header/BaseHeader"
import SeoHead from "../SeoHead"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen bg-bg_color_dark">
    <div className="w-full fixed top-0 left-0 z-[10]">
      <SeoHead title="SMS Activation" description="SMS Activation" image="/images/Logo/logo.png" />
      <BaseHeader />
    </div>
    <Container>{children}</Container>
    <Footer />
  </div>
)

export default BaseLayout
