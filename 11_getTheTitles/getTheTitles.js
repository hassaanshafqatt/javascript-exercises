const getTheTitles = function(books) {
    const newArr = [];
    books.forEach(book => {
        newArr.push(book.title);
    });
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
