// class Person {
//     constructor( name, birthYear ) {
//         this.name = name;
//     // сработает сеттер
//         this.birthYear = birthYear;
//     }
    
//     set birthYear( year ) {
//         const date = new Date();
//         this.age = date.getFullYear() - year;
//         this._birthYear = year;
//     }
    
//     get birthYear() {
//             return this._birthYear;
//         }
//     }
//     const ivan = new Person('Иван', 2000);
//     // сработает сеттер
//     ivan.birthYear = 1990;
//     // сработает геттер
//     console.log( ivan.birthYear );



class PrintEditionItem {
    constructor( name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.state = state;
        this.pagesCount = pagesCount;
        this.type = type;
    }

    fix(){
        // debugger;
        this.state = this.state * 1.5;
        return this.state;
    }

    
    
    set state(state){
        if ( state < 0){
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else if ( state < 100 ) {
            this._state = state;  
        }
    }

    get state(){
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008, 90);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, state){
        super(name, releaseDate, state)
        this.type = `magazine`
    }
}

const vatson = new Magazine("Приключение тома", 2021, 1038);
console.log(vatson.name);
console.log(vatson.releaseDate);
console.log(vatson.state);
console.log(vatson.type);

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate){
        super(name, releaseDate)
        this.author = author;
        this.type = `book`;
    }
}

class NovelBook extends Book {
    constructor(){
        super()
        this.type = `novel`
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, state){
        super(author, name, releaseDate, state)
        this.type = `fantastik`
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate){
        super(author, name, releaseDate)
        this.type = `detective`
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15
console.log(picknick.type);