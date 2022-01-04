function sum(input) {
    let end = Number(input[0]);
    let sum = 0;
    let idx = Number(1);
    
    while(sum < end) {
        let currN = Number(input[idx]);
        sum += currN;
        idx++;
    }
    console.log(sum);
}
//sum(["100", "10", "20", "30", "40"]);
