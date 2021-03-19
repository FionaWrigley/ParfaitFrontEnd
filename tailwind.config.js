module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      width: {

        '1/2px': '0.5px',
        '30' : '30px'

      },

      fontSize: {
        'xxs': '.5rem'
       },

      gridTemplateColumns: {
        '24': 'repeat(24, minmax(30px, 30px))',
        '31': '100px repeat(30, minmax(720px, 720px))',
        '30': 'repeat(30, auto)',
        'schedule' : '100px 1frS',
        'members' : '100px'

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
       }
       
       
       

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
