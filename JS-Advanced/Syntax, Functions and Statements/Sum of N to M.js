function sum(n,m) {

    let N = Number(n);
    let M = Number(m);

    let result = 0;

    for (let index = N; index <= M; index++) {
        result += index;
    }
    console.log(result);
}
// sum('1', '5');
