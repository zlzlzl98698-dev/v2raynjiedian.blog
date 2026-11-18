/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F7F9FC',
          muted: '#F1F5F9',
          border: '#E5EAF1',
        },
        text: {
          main: '#172033',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
        observatory: {
          bg: '#0B1120',
          card: '#0F172A',
          border: '#1E293B',
          glow: '#00E676',
          cyan: '#38BDF8',
          accent: '#6366F1',
        }
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'WenQuanYi Micro Hei',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SFMono-Regular',
          'Consolas',
          'monospace',
        ],
      },
      lineHeight: {
        relaxed: '1.8',
      },
    },
  },
  plugins: [],
};
