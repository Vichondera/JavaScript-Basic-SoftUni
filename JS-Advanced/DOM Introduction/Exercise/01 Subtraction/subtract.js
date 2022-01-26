function subtract() {

    const elements = {
        firstNum: document.getElementById('firstNumber'),
        secondNum: document.getElementById('secondNumber'),
        result: document.getElementById('result')
    };

    elements.result.innerHTML =
        (Number(elements.firstNum.value) || 0) - (Number(elements.secondNum.value) || 0);
}
