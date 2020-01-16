
let myLibrary = [];

const library = document.getElementById('library')
const btnAddBook = document.getElementById('btn-add-book')
const container = document.querySelector('.container')

function Book(title, author, pages, read, ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function () {
        if (read === 'no') {
            return 'I have not read this book.'
        } else {
            return 'I have read this book.'
        }
    },
        this.bookInfo = function () {
            return `The book ${this.title} by ${this.author} is ${this.pages} pages long, and ${this.read()}`
        }
}

const bookOne = new Book('Almost Transparent Blue', 'Ryu Murakami', 200, 'yes');
const bookTwo = new Book('Norwegian Wood ', 'Haruki Murakami', 296, 'ses');
const bookThree = new Book('Tokyo New Wave: 31', 'Andrea Fazzari', 190, 'no');
const bookFour = new Book('Chicken and Charcoal', 'Matt Abergel', 240, 'no');


function addBookToLibrary() {
    let title = prompt('What is the title of the book?');
    let author = prompt('Who is the author');
    let pages = prompt('How many pages is the book?');
    let read = prompt('Yes or No, have you read this book?').toLowerCase();
    let userBook = new Book(title, author, pages, read);
    myLibrary.push(userBook);
    newRender();
    newContainer(userBook);
    //console.log(myLibrary[0].bookInfo())
}

function render() {
    library.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        library.innerHTML += `<p data-id=${i}> ${myLibrary[i].bookInfo()}</p`
    }
}

function newRender(){
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        library.innerHTML += `<p data-id=${i}> ${myLibrary[i].bookInfo()}</p`
    }
}



function newContainer(userBook){
    var mainBox = document.createElement('div');
    var bookTitle = document.createElement('h2');
    var bookAuthor = document.createElement('p');
    var bookPages = document.createElement('p');
    var bookRead = document.createElement('p');
    var button = document.createElement('button');
    
    i = myLibrary.length - 1;
    
    bookAuthor.textContent = userBook.author;
    bookTitle.textContent = userBook.title;
    bookPages.textContent = userBook.pages;
    bookRead.textContent = userBook.read();
    mainBox.classList.add('book');
    button.classList.add('delete-btn');
    button.textContent = 'click me to remove';
    button.addEventListener('click', removeBook);

    mainBox.id = i;
    button.value = i;
    mainBox.dataset.id = i   

    mainBox.appendChild(bookTitle);
    mainBox.appendChild(bookAuthor);
    mainBox.appendChild(bookPages);
    mainBox.appendChild(bookRead);
    mainBox.appendChild(button);
    container.appendChild(mainBox);
}

function setContainer() {
    for (let i = 0; i < myLibrary.length; i++) {
        var mainBox = document.createElement('div');
        var bookTitle = document.createElement('h2');
        var bookAuthor = document.createElement('p');
        var bookPages = document.createElement('p');
        var bookRead = document.createElement('p');
        var button = document.createElement('button');

        bookAuthor.textContent = myLibrary[i].author;
        bookTitle.textContent = myLibrary[i].title;
        bookPages.textContent = myLibrary[i].pages;
        bookRead.textContent = myLibrary[i].read();
        mainBox.classList.add('book');
        button.classList.add('delete-btn');
        mainBox.id = i;
        button.value = i;
        button.textContent = 'click me to remove';
        button.addEventListener('click', removeBook);
        //button.dataset.id =  i;
        mainBox.dataset.id =  i;
        
        mainBox.appendChild(bookTitle);
        mainBox.appendChild(bookAuthor);
        mainBox.appendChild(bookPages);
        mainBox.appendChild(bookRead);
        mainBox.appendChild(button);
        container.appendChild(mainBox);        
    } 
}

function removeBook(num) {
    // get all book related containers.
    let nodes = document.querySelectorAll("[data-id]");
    // filter based on the value of the attribute
    let targets = [...nodes].filter(n => n.dataset.id == num.target.parentElement.attributes['data-id'].value);
    // get the parent element, and remove the data-book element.
    targets.forEach(t => {
      t.parentElement.removeChild(t);
    })
    
  }


myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);
myLibrary.push(bookFour);
setContainer();
render();
//checkLibrary('Chicken and Charcoal');

function checkLibrary(thisOne){
    for (i=0; i < myLibrary.length; i++){
        if (thisOne === myLibrary[i].title){
            console.log('I found it at ' + i);
        } else {
            
        }
    } 
}


