/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n5: { DEFAULT: '#7EA8BE', light: '#B8D4E3', dark: '#5A8AA0' },
        n4: { DEFAULT: '#8DB48E', light: '#B8D4B9', dark: '#6A926B' },
        n3: { DEFAULT: '#C4A35A', light: '#DCC88E', dark: '#A68838' },
        n2: { DEFAULT: '#B07AA1', light: '#CFA5C3', dark: '#8E5C80' },
        n1: { DEFAULT: '#E07A5F', light: '#EBA593', dark: '#C45A3F' },
        // Travel Zone Colors
        tz1: { DEFAULT: '#4A90D9', light: '#82B4E8', dark: '#2E72BB' }, // 機場交通 - 藍
        tz2: { DEFAULT: '#9B59B6', light: '#C39BD3', dark: '#7D3C98' }, // 飯店住宿 - 紫
        tz3: { DEFAULT: '#E67E22', light: '#F0A870', dark: '#C96A12' }, // 美食餐廳 - 橘
        tz4: { DEFAULT: '#D63384', light: '#E882B4', dark: '#A52266' }, // 購物 - 粉紅
        tz5: { DEFAULT: '#27AE60', light: '#6FCF97', dark: '#1A8A49' }, // 觀光社交 - 綠
        tz6: { DEFAULT: '#E74C3C', light: '#F1948A', dark: '#C0392B' }, // 緊急狀況 - 紅
        tz7: { DEFAULT: '#F39C12', light: '#F9C86A', dark: '#D68910' }, // 在地實戰 - 琥珀金
        surface: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#1E1E1E',
          900: '#141414',
          950: '#111111',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        jp: ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'draw-line': 'draw-line 0.8s ease-out forwards',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.85' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
