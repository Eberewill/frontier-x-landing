module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'x-black': '#0D0D0D',
        'lightBlack': '#1F1F1F',
        'g-one': '#665AEF',
        'g-two': '#FC364C',
        'button-colour': '#0D0D0D',
        'bggrad-one': '#2E2D66',
        'bggrad-two': '#3A273F',
        'bggrad-three': '#181818',
        'bgdrk': '#0D0D0D80',
        'redCustom': '#FC364C',
        'flowBd': '#565656',
        'flowbg': '#1C1C1C'
      },



      'animation': {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }

}