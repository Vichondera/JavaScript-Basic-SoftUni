function largestNum(N1,N2,N3) {
    
    let result;

    if(N1 > N2) {
        if(N1 > N3) {
            result = N1;
        }else {
            result = N3;
        }
    } else {
        if(N2 > N3) {
            result = N2;
        } else {
            result = N3;
        }
    }
    console.log(`The largest number is ${result}.`);
}
//largestNum([5, -3, 16]);
