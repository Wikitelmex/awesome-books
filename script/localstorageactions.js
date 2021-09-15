/* eslint-disable */
class BooksStorage {
  SaveLocalStorage(array1) {
    localStorage.setItem('AmazingBooks', JSON.stringify(array1));
  }

  ReadLocalStorage() {
    const array1 = JSON.parse(localStorage.getItem('AmazingBooks'));

    if (array1 !== null) {
      return array1;
    }
    return false;
  }
}