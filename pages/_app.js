import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import 'react-swipeable-list/dist/styles.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

   return <>
     <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Parfait Social Scheduling App" />
        <meta name="theme-color" content="#deb7c7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/images/logo512.png"></link>
        <link href='images/logo.svg' rel='icon' type='image/svg' sizes='150x150' /> 
        <link href='images/logo80.svg' rel='icon' type='image/svg' sizes='80x80' />
        <link href='images/logo144.svg' rel='icon' type='image/svg' sizes='144x144' />
        <link href='images/logo512.png' rel='icon' type='image/svg' sizes='512x512' />
        <link rel="canonical" href="https://parfait-coral.vercel.app"/>
        <title>Parfait</title>
        
      </Head>
      <ThemeProvider attribute="class">
          <Component {...pageProps} />
          </ThemeProvider>
 
    </>
}
export default MyApp
