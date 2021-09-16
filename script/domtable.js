/* eslint-disable */
class DomTable {
  #title = document.querySelector('#title');

  #author = document.querySelector('#author');

  #booksTable = document.querySelector('#booksTable');

  AddRowBooks(titleB, authorB, idIndex) {
    
    const tr = document.createElement('tr');
    tr.setAttribute('id', `id${idIndex}`);
    const td1 = document.createElement('td');
    td1.innerText = `"${titleB}"`;
    const td4 = document.createElement('td');
    td4.innerText = 'by';
    const td2 = document.createElement('td');
    td2.innerText = authorB;
    const td3 = document.createElement('td');
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.setAttribute('class','btn btn-warning')
    button.setAttribute('onclick', `RemoveBooks('${idIndex}')`);
    td3.appendChild(button);

    tr.appendChild(td1);
    tr.appendChild(td4);
    tr.appendChild(td2);
    tr.appendChild(td3);

    this.#booksTable.appendChild(tr);
    this.#title.value = '';
    this.#author.value = '';
  }

  RemoveRowBooks(idIndex) {
    const tr = document.querySelector(`#id${idIndex}`);
    this.#booksTable.removeChild(tr);
  }

  AddAllRowBooks(array1) {
    if (array1 === null || !array1) {
      return null;
    }
    array1.forEach((e) => {
      this.AddRowBooks(e.title, e.author, e.index);
    });
    return true;
  }

  ReadTitle() {
    return this.#title.value;
  }

  ReadAuthor() {
    return this.#author.value;
  }
}