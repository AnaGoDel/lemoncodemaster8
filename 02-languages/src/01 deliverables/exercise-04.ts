console.log("************** DELIVERABLE 04 *********************");
console.log("*     READ BOOK     *");

/*     Read Book     */
/*Crea una función isBookRead que reciba una lista de libros 
y un título y devuelva si se ha leído o no el libro. Un libro 
es un objeto con title como string y isRead como booleano. 
En caso de no existir el libro devolver false */

interface Book {
    title: string;
    isRead: boolean;
}

type Library = Book[];

function isBookRead(books: Library, titleToSearch: string) {
    const bookToSearch = books.find(book => book.title === titleToSearch)
    return bookToSearch === undefined ? false : bookToSearch.isRead;
}

// Ejemplo:
const books: Library = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log("function isBookRead");
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "La sombra del viento")); // false
console.log("---------------------------------");