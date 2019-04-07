# MyReads Project

Project displays your books on three different shelves: 'Currently Reading', 'Read' and 'Want To Read'. You can move each book to a different shelf as needed. You can add more books to you shelves by clicking the '+' button on the lower right hand corner of the page; this will direct you to a search page. Query books as necessary, if a book is already on a shelf, when you click the dropdown on the book it will show what shelf it is currently on. To navigate back to your shelves, click the back arrow. State is saved when you refresh page. If you delete your history and cookies, your shelves will be reset.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── App.module.css
│   │   ├── book
│   │   │   ├── Book.js
│   │   │   └── Book.module.css
│   │   ├── listshelves
│   │   │   ├── ListShelves.js
│   │   │   └── ListShelves.module.css
│   │   ├── navbar
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.module.css
│   │   ├── querybooks
│   │   │   ├── QueryBooks.js
│   │   │   └── QueryBooks.module.css
│   │   └── shelf
│   │       ├── Shelf.js
│   │       └── Shelf.module.css
│   ├── icons
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── utils
│       └── BooksAPI.js
└── yarn.lock
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
