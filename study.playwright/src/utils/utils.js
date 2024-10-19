const fs = require('fs');
const path = require('path');

class Utils {
    readJsonFile(filePath) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
}

module.exports = Utils;