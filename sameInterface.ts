interface Author {
    id: string;
    name: string;
};

interface Book {
    id: string;
    name: string;
};

interface Song{
    id: string;
    name: string;
    year: number;
}

const getBookById = (id: string): Book => ({
    id,
    name: "Think and Grow Rich"
});

const getAuthorById = (id: string): Author => ({
    id,
    name: "Alexander Graham Bell"
});

const getSongById = (id: string): Song => ({
    id,
    name: "Smack That",
    year : 2008
});

const book = getBookById("bid-001");
const author = getBookById("aid-001");
const song = getSongById("sid-001");

const saveBook = (book: Book) => console.log(`Saving book :`, {
    book
});

const saveAuthor = (author: Author) => console.log(`Saving author :`, {
    author
});

const saveSong = (song: Song) => console.log(`Saving song :`, {
    song
});

/* 
    this does give error because :
1. both have same properties in interface
2. so if we try to access id or name from book or author, it will be available
3. Typescript checks for run time error, which in this case would not occur
*/

saveAuthor(book);
saveBook(author);

/*
un commenting below line would not work

Error: Argument of type 'Book' is not assignable to parameter of type 'Song'.
  Property 'year' is missing in type 'Book' but required in type 'Song'

  the property year is missing in book and author, so at 
  runtime if we try to access year from book or author, it will give error
  and thus typescript does not allow it

  But if we make year optional in Song interface, it will work
*/

// saveSong(book);
saveSong(song);

