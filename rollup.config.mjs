import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import process from 'process';

const tsconfig = {
  paths: {
    '@ui/*': ['src/*'],
  },
};
const libraryInputs = {
  index: 'src/index.ts',
};
const formats = ['cjs', 'esm'];

const getConfig = ({ output = {}, plugins = [], dir = './' }) => {
  return {
    input: Object.assign({}, libraryInputs),
    output: {
      dir,
      extend: output.format === 'iife',
      name: output.format === 'iife' ? 'window' : undefined,
      exports: 'named',
      sourcemap: true,
      ...output,
    },
    plugins: [resolve(), typescript(tsconfig), ...plugins],
  };
};

const getMappings = ({ output = {}, plugins = [], dir = './' }) => {
  return {
    input: Object.assign({}, libraryInputs),
    plugins: [dts(), typescript(tsconfig), ...plugins],
    output: {
      dir,
      format: 'es',
      sourcemap: false,
      ...output,
    },
  };
};

const configs = formats.map((format) => {
  return {
    dir: `./dist/${format}`,
    output: {
      format,
      sourcemap: true,
    },
  };
});

// Generating the TS mappings is resource intensive, so we separate that work and from the rest of the build
export default process.env.MAPPINGS
  ? [
      ...formats.map((f) =>
        getMappings({
          dir: `./dist/${f}`,
        }),
      ),
    ]
  : [...configs.map((c) => getConfig(c))];
