/* strict mode on to avoid mistypes, and using of reserved words */
"use strict";

/* Imports classes from files */
/*
import { class1 } from './array';
import { class2 } from './domtable';
import { class3 } from './localstorageactions';
*/

/* Variables declaration put inside respective class */
let books = [];
const index = 0;
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const booksTable = document.querySelector('#booksTable');

/* Code to refactoring */

//localstorage class
function SaveLocalStorage() {
  localStorage.setItem('AmazingBooks', JSON.stringify(books));
}

//domtable class
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
  button.setAttribute('onclick', `RemoveRowBooks('${idIndex}')`);
  td3.appendChild(button);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  booksTable.appendChild(tr);
  SaveLocalStorage();
}

//array class
function CreateGuid() {
  function p8(s) {
    const p = (`${Math.random().toString(10)}000000000`).substr(2, 8);
    return s ? +p.substr(0, 4) + p.substr(4, 4) : p;
  }
  return p8() + p8(true);
}

//array class
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

//domtable class
function RemoveRowBooks(idIndex) {
  const tr = document.querySelector(`#id${idIndex}`);
  const isIndex = (element) => element.index === idIndex.toString();
  const myIndex = books.findIndex(isIndex);

  if (myIndex === -1) {
    // must change alert for an validation
    alert('index mismatch');
    return 0;
  }
  books.splice(myIndex, 1);
  booksTable.removeChild(tr);
  SaveLocalStorage();
}

//localstorage class
function ReadLocalStorage() {
  const temp = JSON.parse(localStorage.getItem('AmazingBooks'));

  if (temp !== null) {
    books = temp;
  }
}

//domtable class
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