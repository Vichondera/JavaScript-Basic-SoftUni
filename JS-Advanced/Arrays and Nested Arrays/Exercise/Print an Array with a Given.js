function print(array,delimiter) {
  
    let temp = '';
    for (let index = 0; index < array.length; index++) {
        temp += array[index] + delimiter;
    }

    let output = '';

    for (let index = 0; index <= temp.length - 2; index++) {
        output += temp[index];
    }
    console.log(output);
  
}
//print(['One', 'Two', 'Three', 'Four', 'Five'], '-');
