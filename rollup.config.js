import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
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
