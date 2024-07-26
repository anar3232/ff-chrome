const colorsPkg = require("../colors.js");
const { colors } = colorsPkg;

const userContentDiscordPkg = require("../components/sites/discord.js");
const { userContentDiscordCssString } = userContentDiscordPkg;

const userContentCssString = /*css*/`
    ${userContentDiscordCssString}

    @-moz-document url("about:newtab"), url("about:home") {
        html {
            --newtab-background-color-secondary: #444444 !important;
            --newtab-element-hover-color: rgba(0, 0, 0, 0.55) !important;
        }

        body {
            background-image: url("./res/glenn-carstens-peters-IMRuLuNnFw4-unsplash.jpg") !important;
            background-position: center !important;
            background-size: cover !important;
            background-blend-mode: soft-light !important;
        }

        .tile {
            --newtab-background-color-secondary: rgb(0, 0, 0) !important;
            box-shadow: none !important;
        }

        .search-wrapper .search-handoff-button {
            background-color: rgb(22, 22, 22, 0.80) !important;
            border-radius: 5rem !important;
        }

        .search-wrapper.fake-focus:not(.search.disabled) .search-handoff-button {
            border: 1px solid ${colors["horiox-accent-color"]} !important;
        }

        .toggle-button[aria-pressed="true"]:enabled:hover {
            background: ${colors["horiox-accent-color-secondary"]} !important;
            border-color: transparent !important;
        }

        .customize-menu.customize-animate-enter-done, .customize-menu.customize-animate-enter-active {
            background-color: ${colors["horiox-bg-color-primary"]} !important;
        }

        .customize-menu.customize-animate-enter-done .close-button-wrapper, .customize-menu.customize-animate-enter-active .close-button-wrapper {
            background-color: transparent !important;
        }

        input[type="checkbox"]:checked {
            background-color: ${colors["horiox-accent-color"]} !important;
        }
    }

    @-moz-document url-prefix("about:") {
        :root {
            --in-content-page-background: ${colors["horiox-bg-color-primary"]} !important;
            --in-content-box-background: ${colors["horiox-bg-color-secondary"]} !important;
            --in-content-table-background: ${colors["horiox-bg-color-secondary"]} !important;
            --in-content-primary-button-background: ${colors["horiox-accent-color"]} !important;
            --color-accent-primary: ${colors["horiox-accent-color"]} !important;
        }
    }
`;

module.exports = {
    userContentCssString
};
