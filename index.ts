import { comparePdfToSnapshot } from "pdf-visual-diff";

comparePdfToSnapshot(`sample.pdf`, __dirname, "test").then((r) => {
  console.log(r);
});
