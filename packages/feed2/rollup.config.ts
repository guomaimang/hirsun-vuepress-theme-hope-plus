import { bundle } from "../../scripts/rollup.js";

export default bundle("node/index", {
  external: ["cheerio", "xml-js"],
});
