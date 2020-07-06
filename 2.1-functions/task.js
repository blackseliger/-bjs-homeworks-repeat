function getSolutions( a, b, c) {
    console.log(`heh`)
    let D = b**2 - 4*a*c;
    let roots = [];
    console.log(D);
    if ( D < 0 ) {
       return   { d:  D, roots } 
    } else if ( D == 0) {
        let x1 = -b/2*a;
        return { d: D, roots: [x1] }
    } 
        let x1 = (-b + Math.sqrt(D))/(2*a);
        let x2 = (-b - Math.sqrt(D))/(2*a);
        return { d: D, roots: [x1, x2] }

}

function showSolutuinsMessage( a, b, c){
    let result = getSolutions( a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.d}`)
    if ( result.d < 0) {
        console.log( `Уравнение не имеет вещественных корней`);
        console.log(result.roots);
    } else if (result.d == 0) {
        console.log(`Уравнение имеет один корень X1 = ${result.roots[0]}`);
    } 
        console.log(`Уравнение имеет два корня Х1 = ${result.roots[0]}, Х2 = ${result.roots[1]}`);
}



// task 2

function getAverageScore(data){
    function getAverageMark(marks) {
        let sum = 0;
        for ( let i = 0; i < marks.length; i++) {
            sum += marks[i];
        } 
        return (marks) ? sum/marks.length : 0;
    }

    result = new Object();
    resultArray = [];


    for ( prop in data ) {
        result[prop] = getAverageMark(data[prop]);
        console.log(` ${prop} : ${result[prop]}`)
        
        resultArray.unshift(getAverageMark(data[prop]));
    }

    result.average = getAverageMark(resultArray);
    return result;
}

console.log(getAverageScore(
    {
        algebra:[2,4,5,2,3,4],
        geometry:[2,4,5],
        russian:[3,3,4,5],
        physics:[5,5],
        music:[2,2,6],
        english:[4,4,3],
        poetry:[5,3,4],
        chemistry:[2],
        french:[4,4]
    }
    ));


    // task 3

    function getPersonalData(secretData) {
        function getDecodedValue(secret) {
            for ( prop in secretData) {
              if (secretData[prop] === 0) {
               return secretData[prop] = `Родриго`; 
              } else if (secretData[prop] === 1) {
                     return secretData[prop] = `Эмильо`}
            }
        }

    let result = new Object();
    result.firstName = getDecodedValue();
    result.lastName = getDecodedValue();
    
    return result;

    }


    console.log( getPersonalData({
        aaa: 0,
        bbb: 0
    }));

    
    console.log( getPersonalData({
        aaa: 1,
        bbb: 0
    }));


    console.log( getPersonalData({
        aaa: 0,
        bbb: 1
    }));

    console.log( getPersonalData({
        aaa: 1,
        bbb: 1
    }));