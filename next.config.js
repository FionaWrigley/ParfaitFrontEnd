const withPWA = require('next-pwa');

settings = {
    /* config options here */
    env: {
      parfaitServer: 'https://parfait-findthegaps.herokuapp.com'
    },
    
    images: {
        domains: ['res.cloudinary.com'],
      },
      pwa: {
        dest: 'public'
    },
  }

 module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
