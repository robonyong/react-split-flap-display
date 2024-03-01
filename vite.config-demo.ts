import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
  base: '/react-split-flap-display',
  plugins: [react(), sassDts()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
