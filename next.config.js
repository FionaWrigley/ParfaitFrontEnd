const withPWA = require('next-pwa');

settings = {
//module.exports = withPWA({
    /* config options here */
    env: {
     //parfaitServer: 'http://localhost:5000'
     parfaitServer: 'https://parfait-findthegaps.herokuapp.com'
    },
    
    images: {
        //domains: ['localhost', '127.0.0.1'],
        domains: ['https://parfait-findthegaps.herokuapp.com'],
      },
      pwa: {
        dest: 'public'
    }

      // async headers() {
      //   return [
      //     {
      //       source: '/:path*',
      //       headers: [
      //         {
      //           key: 'X-Content-Type-Options',
      //           value: 'nosniff' 
      //         },
      //         {
      //           key: 'Cache-Control',
      //           value: 'max-age=31536000, immutable' 
      //         },
            
      //       ],
      //     }
      //   ]
      // }
  }
  

  //)

 module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
 //module.exports = settings;