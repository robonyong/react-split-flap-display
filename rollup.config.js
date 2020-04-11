import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
      globals: { 'styled-components': 'styled' },
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'es',
      globals: { 'styled-components': 'styled' },
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    postcss({
      modules: true,
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['ts', 'tsx'],
    }),
    resolve(),
    commonjs(),
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
