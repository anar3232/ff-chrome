const fs = require("fs");
const path = require("path");

const userChromePkg = require("./components/userChrome.js");
const { userChromeCssString } = userChromePkg;
const userContentPkg = require("./components/userContent.js");
const { userContentCssString } = userContentPkg;

function buildCss() {
    function buildCssFile(outputFileName, contents) {
        let filePath = "C:/Users/amar/AppData/Roaming/Mozilla/Firefox/Profiles/0mukfipq.default-release/chrome/";
        filePath += outputFileName;
        // Ensure the directory exists
        const dirPath = path.dirname(filePath);

        try {
            // Check if the directory exists, if not, create it
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
                console.log(`Created directory: ${dirPath}`);
            }
    
            // Write the CSS string to the file
            fs.writeFileSync(filePath, contents, "utf8");
            console.log("userChrome.css has been saved successfully!");
        } catch (err) {
            console.error(`Failed to write ${outputFileName}. Error details: ${err.message}`);
            console.error("Stack trace:", err.stack);
        }
    }

    buildCssFile("userChrome.css", userChromeCssString);
    buildCssFile("userContent.css", userContentCssString);
};

buildCss();