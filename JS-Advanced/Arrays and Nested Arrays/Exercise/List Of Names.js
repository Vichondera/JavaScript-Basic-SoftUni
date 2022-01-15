function list(array) {

    let output = [];
    array.sort();
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let temp = ''
        temp = index + 1 + '.' + element;
        output.push(temp);
        
    }

    console.log(output.join('\n'));

}
// list(["John", "Bob", "Christina", "Ema"]);
