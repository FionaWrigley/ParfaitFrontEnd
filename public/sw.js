if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6o-pr_lMJpRcoxqUChFVE/_buildManifest.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/6o-pr_lMJpRcoxqUChFVE/_ssgManifest.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/00099389648a75624c5140c7579ef452ca5cbbcc.b558afe115f32d05ab0c.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/0e9d12181852e9174a5ebef45c9c72f727e8610a.070c197e9511a3a454a1.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/4a1628732d483721d7f9f65afc3fae76b5ca646e.9050e8c487a3057d1f86.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/6005bcd938698cc61a66410e27124989972d4097.abcb1fb974fa06e6e8d4.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/74b7e881f15fd0c2607d1d3e4bcc94f9d9357a33.4f0eda8fc77795fc6a36.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/b846e59f07f5498aadc1452d0cdd95490c06daed.3f949d4bfc990e2d167a.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/c70051d503f0a1bb210f91a2a3370b8fd8809d44.6e357c8888962b198fe1.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/cb1608f2.6ed854642210b5245aa4.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/framework.3519294afa6a9ab53973.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/main-81d50e9f28a09ecb6f01.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/_app-085cfa8cc25d901848fd.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/_error-7869d3c22bab62e51327.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/admin-5398e7282c1df22676e6.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/editprofile-6a4dc5ed3c413fe1256f.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/event-a7412f082e8be3f70dcc.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/groups-844c3088b92e2d8b9b06.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/groupschedule-2d7627bec1db8b9e3295.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/index-eb430e78209d380973c3.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/login-4ede70e250499a3022f0.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/myschedule-48d8bcd6d26d0e3fbb70.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/newgroup-4726fe30886cbdb66ff7.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/pages/register-edb2c88edb0812ce9da4.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/polyfills-0144d5b481bf411d4a2c.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/css/158f5591315b72ccafd4.css",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/_next/static/css/7f765476b26cb6ea538a.css",revision:"6o-pr_lMJpRcoxqUChFVE"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/logo.svg",revision:"b108defc03c33619d4b46a191d496e3d"},{url:"/images/logo144.svg",revision:"a05fcf9f5a3a8ad5206110357bfc03d1"},{url:"/images/logo192.svg",revision:"2e64aa18bdd5ff6f483ae4adeaab2246"},{url:"/images/logo512.png",revision:"8fc7ce28e51f76647ff34fea585fa625"},{url:"/images/logo512.svg",revision:"da33996524bbc6eb9c872ee989e611ba"},{url:"/images/logo80.svg",revision:"e874b5b4680ed8d73b1af611a7f6344e"},{url:"/manifest.webmanifest",revision:"bd6093fc15161810ddcec41b91a16d4f"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
