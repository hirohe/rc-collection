import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path';

function getPlugins(format = 'amd') {
  const typescriptOptions = format === 'esm' ? {} : {
    compilerOptions: {
      declaration: true,
      declarationDir: 'lib/types',
    }
  }

  return [
    peerDepsExternal(),
    nodeResolve({ browser: true }),
    commonjs(),
    typescript({
      tsconfig: path.join(__dirname, 'tsconfig.json'),
      tsconfigOverride: typescriptOptions,
      typescript: require('typescript'),
    }),
  ]
}

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib',
      preserveModules: true,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
    plugins: getPlugins('cjs'),
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'lib/es',
      preserveModules: true,
      entryFileNames: '[name].esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: getPlugins('esm'),
  }
];
