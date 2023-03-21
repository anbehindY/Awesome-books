const booksCollection = [
  {
    title: "First Book",
    author: "Testero Testyy",
  },
  {
    title: "Second Book",
    author: "Testero Testyy",
  },
];

const title = document.getElementById("title");
const author = document.getElementById("author");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.querySelectorAll('.remove');

const addBook = (bookTitle, bookAuthor) => {
    const book = {};
    book.title = bookTitle;
    book.author = bookAuthor;
    booksCollection.push(book); 
};

const removeBook = () => {
    const removed = booksCollection.filter(() => {
        title.value = 
    })
}

addBtn.addEventListener("click", () => {
  const bookTitle = title.value;
  const bookAuthor = author.value;
  if (bookTitle && bookAuthor) addBook(bookTitle, bookAuthor);
});
