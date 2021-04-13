import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import 'react-swipeable-list/dist/styles.css';
//import {useEffect} from 'react';
import Head from 'next/head';
//import Html from 'next/document'

function MyApp({ Component, pageProps }) {

  // useEffect(() => {
  //   if("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //      navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log("Service Worker registration successful with scope: ", registration.scope);
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, [])
 
   return <>
     <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Parfait Social Scheduling App" />
        <meta name="theme-color" content="#fbcfe8" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/images/logo192.svg"></link>
        <link rel="canonical" href="https://localhost:3000"/>
        <title>Parfait</title>
        
      </Head>
      <body className="bg-gradient-to-r from-pink-50 to-indigo-50">
   
    <Component {...pageProps} />
    </body>
    
    </>
    
}

export default MyApp
