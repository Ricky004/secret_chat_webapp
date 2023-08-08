/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
          'cu-bg': '#a7bcff',
          'cu-logo': '#4A55A2',
          'cu-text-cl1': '#6356BB',
          'hover-btn-bg': '#4C3EAB',
          'btn-bg': '#8474E3',
          'sidebar-bg': '#4F709C',
          'navbar-bg': '#213555',
          'navbar-bg-2': '#4682A9',
          'cu-text-cl2': '#ddddf7',
          'btn-bg-2': '#5d5b8d',
          'chat-bg': '#91C8E4',
          'icon-cl': '#146C94',
          
      },

      borderWidth: {
         'border-1': '1px',
      },

      width: {
         'w-home': '65%',
         'w-tablet': '90%',
      },

      height: {
        'h-home': '80%',
      },
      
      flex: {
        'flex-i': '1',
        'flex-j': '2',
      },
      fontSize: {
        'text-s1': '12px'
      },
      maxWidth: {
        'mw-1': '80%',
      },
      borderRadius: {
        'cu-br': '0 10px 10px 10px',
      }

    },
  },
  plugins: [

  ],
}

