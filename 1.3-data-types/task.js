"use strict"


    console.log(`text`);

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let checkArguments = {
        percent,
        contribution,
        amount
    }

    for (let argument in checkArguments ) {
        if (isNaN(checkArguments[argument])) {
            console.log(`Параметр ${argument} содержит неправильное значение ${checkArguments[argument]}`);
        } 
    }

    const p = (percent/12)/100;
    const sumOfCredit = amount - contribution;
    const month = new Date().getMonth();
    const periodOfCredit = (date.getMonth() - month) + ( 12 * (new Date(date).getFullYear() - new Date().getFullYear()));
    let payment = sumOfCredit*(p+p/((((1+p)**periodOfCredit)-1)));
    console.log(payment.toFixed(2));
    return Number(payment.toFixed(2));

    // код для задачи №1 писать здесь
    // return totalAmount;
}

function getGreeting(name) {

    function message(){
        console.log( `Привет, мир! Меня зовут ${name}`)  
        return;
    }
    if (name) {
        message();   
    } 
        name = "Аноним"
        message();
    return
    // код для задачи №2 писать здесь
    // return greeting;
}


// let ivan = {
//     firstName: `Ivan`,
//     lastName: `Zaycev`
// }

// for (let prop in ivan) {
//     console.log( `Ex 1 Svoistvo ${prop}`);
//     console.log( `Ex 2 Znachenie ${ivan[prop]}`);
// }

// for (let pRop of ivan) {
//     console.log (` Ex 3 ${pRop}`);
// }