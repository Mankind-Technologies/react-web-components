import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from 'rollup-plugin-babel';


export default {
  input: "src/index.ts",
  output: [
    {
      file: "../../components-server/card/index.js",
      format: "iife",
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
      }
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.tsx', '.ts'], browser: true}),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel(),
    postcss()
  ]
};
