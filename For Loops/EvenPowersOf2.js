function nums(input) {
    let num = Number(input[0]);
    let number = 1;
    console.log(number);

    for (let i = 2; i <= num; i++){
        if(i % 2 == 0) {
            number *= 2 * 2;
            console.log(number);
        }
    }
}
//nums((["3"]));
