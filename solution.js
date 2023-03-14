// ######easy##########

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return Array.from(String(x), Number).reverse().join('') == Array.from(String(x), Number).join('')
    
};

