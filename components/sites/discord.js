const colorsPkg = require("../../colors.js");
const { colors } = colorsPkg;

const userContentDiscordCssString = /*css*/`
    @-moz-document url-prefix("https://discord.com/"), url-prefix("http://discord.com/") {
        :root {
            --button-positive-background: ${colors["horiox-accent-color"]} !important;
            --button-positive-background-hover: ${colors["horiox-accent-color-secondary"]} !important;
        }

        .circleIconButton_db6521 {
            color: ${colors["horiox-accent-color"]} !important;
        }
        .circleIconButton_db6521.selected_db6521 {
            color: ${colors["horiox-accent-color-contrasting-color"]} !important;
            background-color: ${colors["horiox-accent-color"]} !important;
        }

        .icon_aef5fd {
            color: ${colors["horiox-accent-color-contrasting-color"]} !important;
            background-color: ${colors["horiox-accent-color"]} !important;
        }

        .tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c {
            background-color: ${colors["horiox-accent-color"]} !important;
            color: ${colors["horiox-accent-color-contrasting-color"]} !important;
        }
        .tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c[aria-selected="true"] {
            background-color: transparent !important;
            color: ${colors["horiox-accent-color"]} !important;
        }
    }
`;

module.exports = {
    userContentDiscordCssString
};