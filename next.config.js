const withPWA = require('next-pwa');

settings = {
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
  }


 module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
 //module.exports = settings;