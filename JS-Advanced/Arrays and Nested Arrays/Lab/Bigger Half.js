function biggerHalf(arr) {
    return arr.sort((a, b) => a - b).slice(-Math.ceil(arr.length / 2));
}
