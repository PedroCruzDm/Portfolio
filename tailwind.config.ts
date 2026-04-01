/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        omori: {
          bg: '#FFFFFF',           // Fundo branco clássico do White Space
          surface: '#F8F8F8',      // Superfície quase branca para cards
          text: '#1A1A1A',         // Texto quase preto (rabiscado)
          secondary: '#555555',    // Cinza médio para textos secundários
          border: '#AAAAAA',       // Bordas cinza claro (efeito lápis)
          accent: '#222222',       // Acento escuro para botões e destaques
        },
        whiteFlower: '#FFFFFF',    // Flores brancas
      },
      fontFamily: {
        title: ['Gaegu', 'system-ui', 'sans-serif'],   // Fonte rabiscada / hand-drawn
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'omori': '0 4px 12px -4px rgba(0, 0, 0, 0.15)',
        'lamp': '0 0 25px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'omori': '4px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pencilShake: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        'float-slow': 'float 16s ease-in-out infinite',
        'pencil': 'pencilShake 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}