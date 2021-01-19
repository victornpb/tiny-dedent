/**
 * Removes the indentation of multiline strings
 * @param  {string} str A template literal string
 * @return {string} A string without the indentation
 */
module.exports = function dedent(str) {
    str = str.replace(/^[ \t]+\r?\n/, ''); // remove leading breakline
    var indent = /^[ \t]+/m.exec(str); // detected indent
    if (indent) str = str.replace(new RegExp('^' + indent[0], 'gm'), ''); // remove indent
    return str.replace(/(\r?\n)[ \t]+$/, '$1'); // remove trailling indent
};
