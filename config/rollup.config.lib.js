import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import less from 'rollup-plugin-less';
import replace from 'rollup-plugin-replace';

import pkg from "../package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: pkg.name,
    },
    {
      file: pkg.module,
      format: "es",
      name:  pkg.name,
    },
  ],
  plugins: [
    replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    babel({
      exclude: "node_modules/**",
      extensions,
      babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs(),
    terser(),
    less({
      output: './output/cf-ui.css'
    }),
  ],
};
