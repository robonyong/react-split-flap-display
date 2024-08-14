import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';
import license from 'rollup-plugin-license';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import sassDts from 'vite-plugin-sass-dts';
import dts from 'vite-plugin-dts';

import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  plugins: [
    react(),
    sassDts({
      prettierFilePath: './.prettierrc',
    }),
    dts({
      include: ['src'],
    }),
    libInjectCss(),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  build: {
    lib: {
      entry: {
        'split-flap-display': resolve(__dirname, 'src/index.ts'),
        constants: resolve(__dirname, 'src/constants.ts'),
      },
    },
    rollupOptions: {
      strictDeprecations: true,
      input: [resolve(__dirname, 'src/index.ts'), resolve(__dirname, 'src/constants.ts')],
      external: Object.keys(pkg.peerDependencies || {}),
      plugins: [
        typescript(),
        url({
          include: ['**/*.mp3'],
          limit: 100000,
        }),
        copy({
          targets: [{ src: 'src/assets/**/*', dest: 'dist/assets/' }],
        }),
        nodeResolve(),
        commonjs(),
        license({
          banner: {
            content: {
              file: './LICENSE',
            },
          },
        }),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: false,
      },
    },
  },
});
