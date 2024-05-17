import "../styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import Script from "next/script"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "../providers/ThemeProvider"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Script
      src="https://js-cdn.music.apple.com/musickit/v3/musickit.js"
      strategy="afterInteractive"
      data-web-components
      async
    />
    <div className="min-w-full min-h-screen flex flex-col bg-black">
      <Component {...pageProps} />
    </div>

    <ToastContainer />
    <Analytics />
  </ThemeProvider>
)

export default MyApp
