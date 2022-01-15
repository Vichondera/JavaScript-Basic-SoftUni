function demo(array) {

    let arr = [];
    let counter = 1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if(element === 'add') {
            arr.push(counter);
        } else if(element === 'remove') {
            arr.pop();
        }
        counter++;

    }

    if(arr.length > 0){
        console.log(arr.join('\n'));
    } else{
        console.log('Empty');
    }
}
// demo(['add', 'add', 'add', 'add']);
