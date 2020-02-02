import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import sucrase from '@rollup/plugin-sucrase'
import livereload from 'rollup-plugin-livereload'
import del from 'rollup-plugin-delete'
import ts from 'typescript'

export default {
  input: `src/browser/main.tsx`,
  output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/browser/**',
  },
  treeshake: true,
  plugins: [
    del({ targets: 'dist/*' }),
    replace({
      'process.env.NODE_ENV': `'development'`,
    }),
    // Allow json resolution
    // json(),
    // Compile TypeScript files
    // typescript({
    //   module: ts.ModuleKind.ESNext,
    //   jsx: ts.JsxEmit.React,
    //   // target: ts.ScriptTarget.ES2020,
    // }),
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
    resolve({ browser: true, extensions: ['.js', '.ts', '.tsx'] }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['typescript', 'jsx'],
    }),

    // Resolve source maps to the original source
    // sourceMaps(),

    livereload(),
  ],
}
