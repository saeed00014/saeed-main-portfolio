/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        g_Text_White: '#FFF',
        g_Text_Black: '#000',
        g_Background_Black: '#0F0F0F',
        g_Background_Element: '#D9D9D9',
        g_Border_Active: '#B820FF',
        g_Button_Active: '#D9D9D9',
        g_Button_Background: '#C240FF',
        g_Text_Shaded: '#ffffff80',
        g_Border_Shaded: '#626262',
        g_Background_Shaded: 'rgb(59, 59, 59)',
        g_Background_White_Shop: 'rgb(235, 235, 235)',
        g_Background_Shaded_Shop: 'rgb(241, 242, 244)',
        g_Border_Shaded_Shop: 'rgb(112, 112, 110)'
      },
      fontFamily:{
        'primary': ['Dancing Script', 'cursive'],
        'secondary': ["Poppins", 'sans-serif']
      },
      fontSize: {
        clamp: "clamp(1rem, 13vw, 5.2rem)",
        clamp2: "clamp(1rem, 5vw, 1.5rem)",
        clamp3: "clamp(1.1rem, 4vw, 1.5rem)",
      },
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}

