function area(num) {
    
    let result = typeof(num);
    if(result === 'number') {
        result = Math.pow(num,2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
         console.log('We can not calculate the circle area, because we receive a string.');
    }

}
//area(3);
