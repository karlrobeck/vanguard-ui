/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        'primary': '#0d6efd',
        'primary-subtle': '#031733',
        'primary-emphasis': '#0c64e6', 
        'secondary-emphasis': '#d3dce6',
        'secondary': '#adb5bd',
        'secondary-subtle': '#2f3133',
        'light': '#ffff',
        'dark': '#0000',
      },
      borderColor: {
        'primary-border-subtle': '#084399',
        'secondary-border-subtle': '#8d9399'
      }
    }
  },
  plugins: [],
}
