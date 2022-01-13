function negativePositiveNums(array) {

    let arr = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element < 0) {
            arr.unshift(element);
        } else {
            arr.push(element);
        }
    }
    console.log(arr.join('\n'));
}
// negativePositiveNums([7, -2, 8, 9]);
