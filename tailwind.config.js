/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class', // or 'media' or 'class ,false'
  content: ['./public/*.html', './public/*.css',"./src/**/*.{html,js}" ],
  
  //* theme es para añadir clases extras
  theme: {
    extend: {
      backgroundImage:{
        'yosemite':"url('../img/yosemite.jpg')",
        'sydney':"url('../img/sydney.jpg')",
        'switzerland':"url('../img/switzerland.jpg')",
        'seattle':"url('../img/seattle.jpg')",
        'norway':"url('../img/norway.jpg')",
        'sanFranciscoDesktop':"url('../img/sanFranciscoDesktop.jpg')",
        'sanFrancisco':"url('../img/sanFrancisco.jpg')",
        'new_york':"url('../img/new_york.jpg')",
        'miami':"url('../img/miami.jpg')",
        'LA':"url('../img/LA.jpg')",
        'iceland':"url('../img/iceland.jpg')",
        'europe':"url('../img/europe.jpg')",
        'chicago':"url('../img/chicago.jpg')",
        'bali':"url('../img/bali.jpg')"


      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61AEC9'
      }),
      textColor:{
        'primary':'#CC2D4A',
        'secondary':'#8FA206',
        'tertiary':'#61AEC9'
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      },
      height:{
        '80':'20rem',
        '100':'25rem',
        '120':'30rem'

      }

    },
  },
  variants:{
    width:["responsive","hover","focus","shadow"],
    extend:{},
  },
  plugins: [],
}

