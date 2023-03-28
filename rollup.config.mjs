import path from 'path';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import license from 'rollup-plugin-license';
import pkg from './package.json' assert { type: 'json' };

export default [
  {
    strictDeprecations: true,
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript(),
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
            file: './LICENSE',
          },
        },
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: false },
      { file: pkg.module, format: 'esm', exports: 'named', sourcemap: false },
      {
        file: 'example/src/ReactSplitFlapDisplay/index.js',
        format: 'es',
        exports: 'named',
        banner: '/* eslint-disable */',
        sourcemap: 'hidden',
      },
    ],
  },
];
