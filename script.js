const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const bookUI = document.querySelector('.collection');
const addBookBtn = document.querySelector('#addBookBtn');

const BOOKS_KEY = 'awesome-books';

// book collection: array of objects
const bookCollection = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [
  {
    title: 'First Book',
    author: 'First Author',
  },
  {
    title: 'Second Book',
    author: 'Second Auhtor',
  },
];

// this functions saves book collections to local storage
function saveBooks() {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(bookCollection));
}

// this function updates the UI with new books from book collection
function displayBookCollection() {
  bookUI.innerHTML = '';

  for (let i = 0; i < bookCollection.length; i += 1) {
    bookUI.innerHTML += `
    <div class="book">
      <div class="book-title">${bookCollection[i].title}</div>
      <div class="book-autor">${bookCollection[i].author}</div>
      <button class="removeBookBtn Btn-${i}">Remove</button>
      <hr/>
    </div>`;
  }
}

displayBookCollection();

// this function adds a new book to the book collection
function addNewBook() {
  const title = inputTitle.value.trim();
  const author = inputAuthor.value.trim();

  // book constructor function
  function BookTemplete(title, author) {
    this.title = title;
    this.author = author;
  }

  // checks if title and author is truthy
  if (title && author) {
    // checks if book is already in the book collection
    if (
      bookCollection.some(
        (obj) => Object.is(obj.title.toLowerCase(), title.toLowerCase())
          && Object.is(obj.author.toLowerCase(), author.toLowerCase()),
      ) === false
    ) {
      // add new book to book collection
      // save new book to local storage
      // clear the inout fields for title and author
      // and update bookUI to show the new book
      const newBook = new BookTemplete(title, author);
      bookCollection.push(newBook);

      inputTitle.value = '';
      inputAuthor.value = '';
      saveBooks();
      displayBookCollection();
    }
  }
}

addBookBtn.addEventListener('click', addNewBook);

// removes a book from book collectiion
bookUI.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBookBtn')) {
    const index = event.target.classList[1].split('-')[1];
    bookCollection.splice(index, 1);
    displayBookCollection();
    saveBooks();
  }
});
