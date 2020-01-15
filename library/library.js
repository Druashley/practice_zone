
let myLibrary = [];

const library = document.getElementById('library')
const btnAddBook = document.getElementById('btn-add-book')

function Book(title, author, pages, read,){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function(){
        if (read === 'no'){
            return 'I have not read this book.'
        } else {
            return 'I have read this book.'
        }
    },
    this.bookInfo = function(){
        return `The book ${this.title} by ${this.author} is ${this.pages} pages long, and ${this.read()}`
    }
}

const bookOne = new Book('Almost Transparent Blue', 'Ryu Murakami', 200, true);


function addBookToLibrary (){
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author');
    let pages = prompt('How many pages is the book?');
    let read = prompt('Yes or No, have you read this book?').toLowerCase();
    let userBook = new Book(title, author, pages, read);
    myLibrary.push(userBook);
    render();
    //console.log(myLibrary[0].bookInfo())
}

function render(){
    library.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        library.innerHTML += `<p> ${myLibrary[i].bookInfo()}</p`
    }
}





//const userBook = new Book(addBookToLibrary(title, author, pages, read));


