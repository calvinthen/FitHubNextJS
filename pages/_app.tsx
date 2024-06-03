import "@/styles/globals.css";
import Header  from "../components/Home/Header";
import Footer  from "../components/Home/Footer";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return( 
  <div>
      <SessionProvider session={session}>
        <Header/>      
        <Component {...pageProps} />
        <Footer/>
      </SessionProvider>
  </div>
  );
}
