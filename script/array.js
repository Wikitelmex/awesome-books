/* eslint-disable */
function CreateGuid() {
  function p8(s) {
    const p = (`${Math.random().toString(10)}000000000`).substr(2, 8);
    return s ? +p.substr(0, 4) + p.substr(4, 4) : p;
  }
  return p8() + p8(true);
}

class BooksArray {
  #books = []; // private encapsulation

  AddBook(addTitle, addAuthor) {
    const guindex = CreateGuid();
    const book = {
      index: guindex,
      title: addTitle,
      author: addAuthor,
    };
    this.#books.push(book);
    return book;
  }

  ReadBook(index) {
    const isIndex = (element) => element.index === index.toString();
    const myIndex = this.#books.findIndex(isIndex);

    if (myIndex === -1) {
      // must change alert for an validation
      alert('index mismatch');
      return 0;
    }
    return this.#books[myIndex];
  }

  ReadAllBooks() {
    return this.#books;
  }

  DeleteBook(index) {
    const isIndex = (element) => element.index === index.toString();
    const myIndex = this.#books.findIndex(isIndex);

    if (myIndex === -1) {
      // must change alert for an validation
      alert('index mismatch');
      return 0;
    }
    this.#books.splice(myIndex, 1);
    return true;
  }

  LoadBooks(localBooks) {
    if (localBooks !== null) {
      this.#books = localBooks;
    }
  }
}