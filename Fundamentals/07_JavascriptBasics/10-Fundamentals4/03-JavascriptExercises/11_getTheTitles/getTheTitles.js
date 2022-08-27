const getTheTitles = function(books) {
    let bookTitles = []
    for (book of books){
        bookTitles.push(book.title)
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
