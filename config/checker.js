const fs = require("fs");

// Definiciones para facilitar cambios
const config_path = './config/config.json';
const default_path = './config/default.json';

/**
 *
 * @returns {*}
 */
function existsConfigFile() {
    return fs.existsSync(config_path);
}

/**
 *
 */
function copyDefaultConfig() {
    try {
        fs.writeFileSync(config_path, fs.readFileSync(default_path));
    } catch(e) {
        throw 'Error creating config file: ' + e
    }
}

/**
 *
 * @returns {boolean}
 */
function isConfigDefault() {
    try {
        return fs.readFileSync(config_path).toString() === fs.readFileSync(default_path).toString();
    } catch(e) {
        throw 'Error checking config file: ' + e
    }
}


isConfigOK = () => {
        if (!existsConfigFile()) {
            copyDefaultConfig();
            return false;
        }
        return !isConfigDefault();
};

module.exports = {
    isConfigOK
};
