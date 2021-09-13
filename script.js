var books = [];
let index = 0;
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const booksTable = document.querySelector('#booksTable');

function AddBook() {
  books.push({
    index,
    title: title.value,
    author: author.value,
  });

  AddRowBooks(title.value, author.value, index++);

  title.value = '';
  author.value = '';

  console.log(books);
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

function RemoveRowBooks(idIndex) {
  const tr = document.querySelector(`#id${idIndex}`);
  const isIndex = (element) => element.index === idIndex;

  books.splice(books.findIndex(isIndex), 1);
  console.log(books);
  booksTable.removeChild(tr);
  SaveLocalStorage();
}

function SaveLocalStorage() {
  localStorage.setItem("AmazingBooks", JSON.stringify(books));
}

function ReadLocalStorage() {
  let temp = JSON.parse(localStorage.getItem("AmazingBooks"));
  
  console.log(temp);
  
  
  if(temp!==null){
    books = temp;
  }
  console.log(books);
  
}

function AddAllRowBooks() {
  if (books===null) {
    return null;
  }
  books.forEach( e => {
    AddRowBooks(e.title,e.author,e.index);
  });
}

window.onload = function load() {
  ReadLocalStorage();
  AddAllRowBooks();
}