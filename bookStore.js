
//  Author Construction Function

function Author(name,birthYear,nationality){
    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;
}

let author = new Author("Chetan Bhagat",1980,"Indian")
console.log(author)

// Book Construction Function

function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
    this.getBookInfo=function(){
        console.log(`Title : ${this.title} \nName :  ${this.author.name}  \nGenre :  ${this.genre} \nPrice :  ${this.price}`)
    }
}

let book = new Book("The Mind",author,"Mindset",2000)
console.log(book)

book.getBookInfo()