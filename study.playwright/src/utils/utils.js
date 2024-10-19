const fs = require('fs');
const { allure } = require('allure-playwright');
class Utils {
    readJsonFile(filePath) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    addAllureLabelsFromTags(tags) {
        if (Array.isArray(tags)) {
            tags.forEach(tag => {
                switch (tag) {
                    case '@blocker':
                        allure.label('severity', 'blocker');
                        break;
                    case '@critical':
                        allure.label('severity', 'critical');
                        break;
                    case '@high':
                        allure.label('severity', 'normal');
                        break;
                    case '@medium':
                        allure.label('severity', 'minor');
                        break;
                    case '@low':
                        allure.label('severity', 'low');
                        break;
                    default:
                        allure.label('severity', 'trivial');
                        break;
                }
           });
        }
    }
}

module.exports = Utils;