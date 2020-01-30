import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import livereload from 'rollup-plugin-livereload'
import ts from 'typescript'

export default {
  input: `src/browser/test.tsx`,
  output: [{ file: 'dist/build.js', format: 'iife', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/browser/**',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': `'development'`
    }),
    // Allow json resolution
    // json(),
    // Compile TypeScript files
    typescript({
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.React,
      // target: ts.ScriptTarget.ES2020,
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      namedExports: [
        'react',
        'react-dom',
        'react-is',
        // 'prop-types',
        'react-konva',
      ].reduce(
        (map, key) => ({
          ...map,
          [key]: Object.keys(require(key)),
        }),
        {},
      ),
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({ browser: true }),

    // Resolve source maps to the original source
    // sourceMaps(),

    livereload(),
  ],
}
