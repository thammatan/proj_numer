const myTheme = require("./src/theme");
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
// simple debug to see object
// console.log(myTheme)
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: myTheme
  })
);
