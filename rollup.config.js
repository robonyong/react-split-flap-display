import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import license from 'rollup-plugin-license';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      url({
        include: ['**/*.mp3'],
        limit: 100000,
      }),
      copy({
        targets: [
          { src: 'src/assets/**/*', dest: 'dist/assets/' },
          { src: 'src/assets/**/*', dest: 'example/src/ReactSplitFlapDisplay/assets' },
        ],
      }),
      nodeResolve(),
      commonjs(),
      license({
        banner: {
          content: {
            file: path.join(__dirname, 'LICENSE'),
          },
        },
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'esm', exports: 'named' },
      {
        file: 'example/src/ReactSplitFlapDisplay/index.js',
        format: 'es',
        exports: 'named',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
