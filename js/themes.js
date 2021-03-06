const themeOptions = [ 'light', 'dark' ];

/**
 * Checks whether the provided theme is valid. This list should be reflected in the `styles.css` file.
 * @param {string} testTheme
 * @return {boolean}
 */
function isValidTheme(testTheme) {
    return themeOptions.indexOf(testTheme) >= 0;
}

/**
 * Takes the provided theme key, and loads into a data-attribute on the DOM
 * @param {string} theme
 * @return {boolean} If the theme application was successful
 * */
function applyTheme(theme) {
    if (isValidTheme(theme) === false) {
        return false;
    }

    // Applies to the Primary view
    document.querySelector('html').setAttribute('data-theme', theme);
    return true;
}

module.exports = {
    isValidTheme,
    applyTheme
};
