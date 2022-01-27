function solve() {

    let textInput = document.getElementById('text').value;
    let currCase = document.getElementById('naming-convention').value;
    let output = document.getElementById('result');

    let result = textInput
        .split(' ')
        .map(x => x.toLocaleLowerCase())
        .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
        .join('');

    if (currCase !== 'Camel Case' && currCase !== 'Pascal Case') {
        output.innerHTML = 'Error!';
    } else {
        output.innerHTML =
            currCase === 'Pascal Case' ?
            result :
            `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}`;
    }
}
