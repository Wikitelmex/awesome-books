/* eslint-disable */
const booksAr = new BooksArray();
const domTb = new DomTable();
const localSt = new BooksStorage();
const form1 = document.querySelector('#saveBook');
const myDate = document.querySelector('#myDate');
const dt = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED);

function RemoveBooks(idIndex) {
  booksAr.DeleteBook(idIndex);
  domTb.RemoveRowBooks(idIndex);
  localSt.SaveLocalStorage(booksAr.ReadAllBooks());
}

function AddBookM(e) {
  e.preventDefault();
  const s = booksAr.AddBook(domTb.ReadTitle(), domTb.ReadAuthor());
  domTb.AddRowBooks(s.title, s.author, s.index);
  localSt.SaveLocalStorage(booksAr.ReadAllBooks());
}

function Show(name) {
  const listLink = document.querySelector('#listLink');
  listLink.setAttribute('class','nav-link');
  const addLink = document.querySelector('#addLink');
  addLink.setAttribute('class','nav-link');
  const contactLink = document.querySelector('#contactLink');
  contactLink.setAttribute('class','nav-link');

  const listPage = document.querySelector('#listPage');
  listPage.setAttribute('class','d-none');
  const addPage = document.querySelector('#addPage');
  addPage.setAttribute('class','d-none');
  const contactPage = document.querySelector('#contactPage');
  contactPage.setAttribute('class','d-none');
 
  switch (name) {
    case 'list':
      listLink.setAttribute('class','nav-link active')
      listPage.setAttribute('class','d-block');
      break;
    case 'add':
      addLink.setAttribute('class','nav-link active')
      addPage.setAttribute('class','d-block');
      break;
    case 'contact':
      contactLink.setAttribute('class','nav-link active')
      contactPage.setAttribute('class','contactM d-block');
      break;

  }
}
/* eslint-enable */

window.onload = function load() {
  booksAr.LoadBooks(localSt.ReadLocalStorage());
  domTb.AddAllRowBooks(booksAr.ReadAllBooks());
  myDate.innerText = dt;
};