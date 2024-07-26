const colorsPkg = require("../colors.js");
const { colors } = colorsPkg;

const mixins = {
    panelAppearance: function() {
        return `
            --panel-background: rgba(5, 5, 5) !important;
            --panel-border-color: rgb(15, 15, 15) !important;
            --panel-color: rgb(255, 255, 255) !important;
            border-radius: 24px !important;
        `;
    },
    panelItemsHoverAppearance: function() {
        return `
            background-color: ${colors["horiox-bg-color-tertiary"]} !important;
        `;
    },
};

const userChromeCssString = /*css*/`
    html#main-window {q
        --urlbar-icon-border-radius: 1rem !important;
    }

    #urlbar-background {
        border-radius: 10rem !important;
        background-color: rgb(26, 26, 26) !important;
    }

    #urlbar[breakout][breakout-extend][breakout-extend-animate]>#urlbar-background {
        border-radius: 2rem !important;
    }

    menupopup {
        ${mixins.panelAppearance()}
    }

    menuitem:hover {
        ${mixins.panelItemsHoverAppearance()}
    }

    menu:where([_moz-menuactive="true"]:not([disabled="true"])),
    menuitem:where([_moz-menuactive="true"]:not([disabled="true"])) {
        ${mixins.panelItemsHoverAppearance()}
        color: rgb(255, 255, 255) !important;
    }

    /* Change the background color of the app menu */
    #appMenu-popup {
        ${mixins.panelAppearance()}
    }

    /* Change the background color of menu items on hover */
    #appMenu-popup .subviewbutton:hover {
        ${mixins.panelItemsHoverAppearance()}
    }

    /* Change the background color of the Downloads panel */
    #downloadsPanel {
        ${mixins.panelAppearance()}
    }

    /* Change the background color of download items on hover */
    #downloadsPanel .downloadContainer:hover {
        ${mixins.panelItemsHoverAppearance()}
    }

    /* Change the background color of the Extensions panel */
    #unified-extensions-panel {
        ${mixins.panelAppearance()}
    }

    /* Change the background color of extension items on hover */
    #unified-extensions-panel .unified-extensions-item:hover {
        ${mixins.panelItemsHoverAppearance()}
    }
`;

module.exports = {
    userChromeCssString
};