/* eslint-disable */
const booksAr = new BooksArray();
const domTb = new DomTable();
const localSt = new BooksStorage();
/* eslint-enable */

function RemoveBooks(idIndex) {
  booksAr.DeleteBook(idIndex);
  domTb.RemoveRowBooks(idIndex);
  localSt.SaveLocalStorage(booksAr.ReadAllBooks());
}

function AddBookM() {
  const s = booksAr.AddBook(domTb.ReadTitle(), domTb.ReadAuthor());
  domTb.AddRowBooks(s.title, s.author, s.index);
  localSt.SaveLocalStorage(booksAr.ReadAllBooks());
}

window.onload = function load() {
  booksAr.LoadBooks(localSt.ReadLocalStorage());
  domTb.AddAllRowBooks(booksAr.ReadAllBooks());
};

module.exports(RemoveBooks, AddBookM);