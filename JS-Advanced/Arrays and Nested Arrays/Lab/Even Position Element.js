function evenPos(arr) {
    
    let output = '';

    for (let index = 0; index < arr.length; index+=2) {
        const element = arr[index];
        output += element + ' ';
    }
    console.log(output);
}    
// evenPos(['1','2','3','4','5']);
