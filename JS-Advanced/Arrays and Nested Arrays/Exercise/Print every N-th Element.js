function print(array,steps) {

    let arr = [];

    for (let i = 0; i < array.length; i+=steps) {
        const element = array[i];
        arr.push(element);
    }

    return arr;
}
//print(['5', '20', '31', '4', '20'], 2);
