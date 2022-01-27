function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let content = document.getElementById('extra');

    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
        content.style.display = 'block';
    } else {
        button.innerHTML = 'More';
        content.style.display = 'none';
    }
}
