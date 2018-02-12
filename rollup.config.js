import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      globals: { 'styled-components': 'styled' },
    },
    {
      file: pkg.module,
      format: 'es',
      globals: { 'styled-components': 'styled' },
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    eslint(),
    postcss({
      modules: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    (process.env.NODE_ENV === 'production' && minify()),
  ],
};
