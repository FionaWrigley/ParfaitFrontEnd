module.exports = {
  // purge: {
    
  //   content: [
  //   './pages/*.js',
  //   './components/**/*.js',
  //   './components/*.js',
  //   ],

  //   safelist: {
  //     standard: ['col-start-4','bg-indigo-200', 'bg-pink-200', 'bg-green-200', 'bg-yellow-100', 'bg-purple-200', /^col-start-/, /^row-start-/]

  //   },
    
  //   options: {
  //     whitelist: ['col-start-4','bg-indigo-200', 'bg-pink-200', 'bg-green-200', 'bg-yellow-100', 'bg-purple-200', /^col-start-/, /^row-start-/]

  //   }
  // },



  darkMode: 'class', // or 'media' or 'class'
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
        primaryLight: '#fce7f3',
        secondaryLight: '#ede9fe',
        primaryDark: '#99174d',
        secondaryDark: '#481f7c',
        pinkish: '#e5d1f0'
      
     }),
    
    extend: {
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        // => @media (orientation: portrait) { ... }
        'landscape': {'raw': '(orientation: landscape)'},
        // => @media (orientation: landscape) { ... }
      },

      width: {

        '1/2px': '0.5px',
        '30' : '31px',
        '70' : '70px',
        '60' : '62px'
      },

      height: {
        '250': '250px'
      },

      outline: {
        'gray-300' : '1px solid rgb(209, 213, 219)'
      },

      fontSize: {
        'xxs': '.5rem'
       },

      gridTemplateColumns: {
        '24': 'repeat(24, minmax(31px, 31px))',
        // '31': '100px repeat(30, minmax(720px, 720px))',
        '31': '100px repeat(30, auto)',
        '30': 'repeat(30, auto)',
        'schedule' : '100px 1fr',
        'members' : '100px',
        'results': '12px 1fr 12px',
      },

      gridColumn: {
          'span-24': 'span 24 / span 24',
          'span-25': 'span 25 / span 25' 
      },

      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '30': '30',
        '31': '31'
       },  
       
       gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '30': '30',
        '31': '31'
       },
       
       gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
