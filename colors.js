const utilityPkg = require("./utility.js");
const { rgb } = utilityPkg;

const colors = {
    "horiox-bg-color-primary": rgb(15, 15, 15),
    "horiox-bg-color-secondary": rgb(33, 33, 33),
    "horiox-bg-color-tertiary": rgb(42, 64, 69),
    /////////////////
    "horiox-accent-color": rgb(0, 204, 255),
    "horiox-accent-color-contrasting-color": rgb(255, 255, 255),
    /////////////////
    "horiox-accent-color-secondary": rgb(6, 164, 204),
    /////////////////
};

module.exports = {
    colors
};