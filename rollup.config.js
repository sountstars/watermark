import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "lib/index.js",
  output: [
    {
      file: "dist/index.js",
      // name:''
    },
  ],
  plugins: [resolve(), terser()],
};
