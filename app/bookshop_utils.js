function addVAT(price) {
    return price + (0.2 * price);
}
function getFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}
function makeHalfPrice(originalPrice) {
    return originalPrice / 2;
}
function countBooks(libraryCatalogue) {
    return libraryCatalogue.length;
}
function isInStock(book) {
    if (book.quantity >= 1) {
        return true
    } else {
        return false
    };
}
module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock
};