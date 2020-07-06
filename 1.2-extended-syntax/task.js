"use strict"

function getResult(a,b,c){
    const d = b**2 - 4*a*c;
    const x = [];
    if ( d < 0 ) {
        return x;
    } else if ( d == 0) {
        const x1 = ( -b + Math.sqrt(d) ) / 2*a;
        x.push(x1); 
    } else if ( d > 0 ) {
        const x1 = ( -b + Math.sqrt(d) ) / 2*a;
        const x2 = ( -b - Math.sqrt(d) ) / 2*a;
        x.push(x1, x2);
    }

    return x;

    // код для задачи №1 писать здесь
    // return x;
}

function getAverageMark(marks){

    let sum = 0;

    if ( !marks.length ) {
        console.log(`has not marks`)
        return 0;
    } else if ( marks.length > 5 || marks.length <= 5 ) {
        let warning = (marks.length > 5) ? "Больше 5 оценок вписывать нельзя" : "";
       for ( marks.length; marks.length >= 6; marks.pop()) {
       }
        for ( let mark of marks){
            sum += mark;
        }   console.log(sum);
        return sum/marks.length;
    };
}

function askDrink(name,dateOfBirthday){

    let year = new Date().getFullYear();
    let greeting;
    return greeting = ((year - dateOfBirthday.getFullYear()) > 18 ) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name} но я не могу вам продать алкоголь`; 

    // код для задачи №3 писать здесь
    // return result;
}