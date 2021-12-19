function suppliesForScool(input) {

    //      Пакет химикали - 5.80 лв.
    let chemicals = Number(5.80);
    let markers = Number(7.20);
    let cleanProduct = Number(1.20);

    // Вход
    let chemicalsQty = Number(input[0]) * chemicals;
    let marketsQty = Number(input[1]) * markers;
    let littres = Number(input[2]) * cleanProduct;
    let percent = Number(input[3]) / 100;

    let price = chemicalsQty + marketsQty + littres;
    price = price - (price * percent);
    console.log(price);
    
}
// suppliesForScool(["2 ", "3 ", "4 ", "25 "]);
