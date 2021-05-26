import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import less from 'rollup-plugin-less';
import replace from 'rollup-plugin-replace';

import pkg from "../package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "example/main.tsx",
  output: [
    {
      file: `./example/${pkg.main}`,
      format: "umd",
      name: pkg.name,
    }
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
    less({
      output: './example/output/all.css'
    }),
    serve({
      openPage: "/",
      host: "localhost",
      port: 3003,
      contentBase: ["./example"],
    }),
    livereload({
      watch: ["./example"],
      exts: ["html", "js", "css"],
    }),
  ],
};
