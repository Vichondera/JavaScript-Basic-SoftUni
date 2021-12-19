function f(input) {
    let frst = Number(input[0]);
    let scnd = Number(input[1]);
    let thrd = Number(input[2]);

    let sum = frst + scnd + thrd;

    let min = Math.floor(sum / 60);
    let sec = sum % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}
f(["35", "45", "44"]);
