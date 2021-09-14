/* eslint-disable no-unused-vars */
let books = [];
const index = 0;
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const booksTable = document.querySelector('#booksTable');

function SaveLocalStorage() {
  localStorage.setItem('AmazingBooks', JSON.stringify(books));
}

function AddRowBooks(titleB, authorB, idIndex) {
  const tr = document.createElement('tr');
  tr.setAttribute('id', `id${idIndex}`);
  const td1 = document.createElement('td');
  td1.innerText = titleB;
  const td2 = document.createElement('td');
  td2.innerText = authorB;
  const td3 = document.createElement('td');
  const button = document.createElement('button');
  button.innerText = 'Remove';
  button.setAttribute('onclick', `RemoveRowBooks(${idIndex})`);
  td3.appendChild(button);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  booksTable.appendChild(tr);
  SaveLocalStorage();
}

function CreateGuid() {
  function p8(s) {
    const p = (`${Math.random().toString(10)}000000000`).substr(2, 8);
    return s ? +p.substr(0, 4) + p.substr(4, 4) : p;
  }
  return p8() + p8(true);
}

function AddBook() {
  const guindex = CreateGuid();

  books.push({
    index: guindex,
    title: title.value,
    author: author.value,
  });

  AddRowBooks(title.value, author.value, guindex);

  title.value = '';
  author.value = '';
}

function RemoveRowBooks(idIndex) {
  const tr = document.querySelector(`#id${idIndex}`);
  const isIndex = (element) => element.index === idIndex.toString();

  books.splice(books.findIndex(isIndex), 1);
  booksTable.removeChild(tr);
  SaveLocalStorage();
}

function ReadLocalStorage() {
  const temp = JSON.parse(localStorage.getItem('AmazingBooks'));

  if (temp !== null) {
    books = temp;
  }
}

function AddAllRowBooks() {
  if (books === null) {
    return null;
  }
  books.forEach((e) => {
    AddRowBooks(e.title, e.author, e.index);
  });
}

window.onload = function load() {
  ReadLocalStorage();
  AddAllRowBooks();
};