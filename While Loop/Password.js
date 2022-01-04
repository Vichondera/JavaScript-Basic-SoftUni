function pass(input) {
    let user = input[0];
    let password = input[1];
    let inputPass = input[2];
    let c = 3;

    while(inputPass !== password) {
        inputPass = input[c];
        c++;
        }
    console.log(`Welcome ${user}!`);

}
//pass(["Nakov", "1234", "Pass", "1324", "1234"]);
