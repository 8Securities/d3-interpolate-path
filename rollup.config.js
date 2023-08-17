// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

var globals = {
  'd3-interpolate': 'd3',
};

const config = {
  input: 'index.js',
  external: Object.keys(globals),
  output: [
    // main UMD output
    {
      file: `build/d3-interpolate-path.js`,
      name: 'd3',
      format: 'umd',
      indent: false,
      extend: true,
      globals: globals,
    },
    // copy main UMD output for use on docs site
    {
      file: `docs/d3-interpolate-path.js`,
      name: 'd3',
      format: 'umd',
      indent: false,
      extend: true,
      globals: globals,
    },
    // main ES Modules output
    {
      file: `build/d3-interpolate-path.mjs`,
      name: 'd3',
      format: 'es',
      indent: false,
      extend: true,
      globals: globals,
    },
  ],
};

export default config;
