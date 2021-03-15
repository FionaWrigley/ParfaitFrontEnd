module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      width: {

        '1/2px': '0.5px'

      },
      
      gridTemplateColumns: {
        '25': '100px repeat(24, minmax(30px, 30px))'
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
        '25': '25'
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
        '25': '25'
       }
       

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
