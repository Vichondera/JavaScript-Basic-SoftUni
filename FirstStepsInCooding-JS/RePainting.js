function RePainting(input) {

    let nylon = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) + (input[1] * 0.10)) * 14.50;
    let thinner = Number(input[2]) * 5.00;
    let hours = Number(input[3]);
    let bags = 0.40;

    let sum = nylon + paint + thinner + bags;
    let cashForMaster = materialsSum * 0.30;
    let total = (hours * cashForMaster) + sum;

    console.log(total);
}
//RePainting(["10 ", "11 ", "4 ", "8 "]);
