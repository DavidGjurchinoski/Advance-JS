"using strict";

$(window).on("load", () => {
  function Library(name, books, address) {
    this.name = name ? name : "NoName";
    this.books = books ? books : [];
    this.address = address ? address : "NoAddress";
    this.numberOfMemebers = this.books.length * 15;
    this.printBooks = () => {
      this.books.forEach((element) => {
        console.log(element);
      });
    };
    this.addBook = (book) => {
      this.books.push(Object.create(book));
    };
  }

  function Book(title, genre, libraries, authors) {
    this.title = title ? title : "NoTitle";
    this.genre = genre ? genre : "NoGenre";
    this.libraries = libraries ? libraries : [];
    this.authors = authors ? authors : [];
    this.addLibrary = (library) => {
      this.libraries.push(library);
      library.books.push(this);
    };
    this.removeLibrary = (removeFromLibrary) => {
      this.libraries.map((library, index) => {
        if (isEqual(library, removeFromLibrary)) {
          this.libraries.splice(index, 1);
          return;
        }
      });
      removeFromLibrary.books.map((book, index) => {
        if (isEqual(book, this)) {
          this.libraries.books.splice(index, 1);
          return;
        }
      });
    };
  }

  function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName ? firstName : "NoName";
    this.lastName = lastName ? lastName : "NoLastName";
    this.yearOfBirth = yearOfBirth ? yearOfBirth : "NoYearOfBirth";
    this.books = [];
    this.currentBook = null;
    this.startBook = (book) => {
      if (!this.currentBook) {
        Object.assign(this.currentBook, book);
      } else {
        this.books.push(book);
        this.currentBook = null;
        Object.assign(this.currentBook, book);
      }
    };
  }

  // Function to check deep equality of 2 objects. If equal returns true otherwise false
  function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length != keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = obj1[key];
      const val2 = obj2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        (areObjects && !isEqual(val1, val2)) ||
        (!areObjects && val1 != val2)
      ) {
        return false;
      }
    }
    return true;
  }

  //Function to check if a variable is an object
  function isObject(obj) {
    return obj != null && typeof obj === "object";
  }
});
