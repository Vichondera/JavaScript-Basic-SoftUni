
window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');


    let addBtn = document.getElementById('add-btn');
    let saveBtn = document.createElement('button');
    let likeBtn = document.createElement('button');
    let delBtn = document.createElement('button');

    const allHits = document.getElementsByClassName('all-hits-container');
    const savedContainer = document.getElementsByClassName('saved-container');
    const totalLikes = document.getElementsByClassName('likes');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let genre = genreElement.value;
        let author = authorElement.value;
        let date = dateElement.value;
        let name = nameElement.value;

        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        if (!genre || !author || !date || !name) {
            return;
        }

        let divElement = document.createElement('div');
        let imgElement = document.createElement('img');
        let h2El1 = document.createElement('h2');
        let h2El2 = document.createElement('h2');
        let h2El3 = document.createElement('h2');
        let h3Element = document.createElement('h3');

        imgElement.src = './static/img/img.png';
        // Genre
        h2El1.innerText = `Genre: ${genre}`;
        divElement.appendChild(imgElement);
        divElement.appendChild(h2El1);
        // Name
        h2El2.innerText = `Name: ${name}`;
        divElement.appendChild(h2El2);
        // Author
        h2El3.innerText = `Author: ${author}`;
        divElement.appendChild(h2El2);
        // Date
        h3Element.innerText = `Date: ${date}`;
        divElement.appendChild(h3Element);
        // Save Song
        saveBtn.className = 'save-btn';
        saveBtn.innerText = 'Save song';
        divElement.appendChild(saveBtn);
        // Like Song
        likeBtn.className = 'like-btn';
        likeBtn.innerText = 'Like song';
        divElement.appendChild(likeBtn);
        // Delete
        delBtn.className = 'delete-btn';
        delBtn.innerText = 'Delete';
        divElement.appendChild(delBtn);
        // Add div
        allHits[0].appendChild(divElement);
        // Delete Button

        likeBtn.disabled = false;

        likeBtn.addEventListener('click', (el) => {
            let likes = totalLikes[0].children[0].innerHTML;

            let temp = likes.split(': ');
            let currLikes = Number(temp[1]);
            currLikes++;

            let p = document.createElement('p');
            p.innerText = `Total Likes: ${currLikes}`;

            let currValue = totalLikes[0].children[0];
            currValue.innerHTML = `Total Likes: ${currLikes.toString()}`;

            likeBtn.disabled = true;

            saveBtn.addEventListener('click', (el) => {
                let tempDelBtn = divElement.lastChild;
                divElement.removeChild(divElement.lastChild);
                divElement.removeChild(divElement.lastChild);
                divElement.removeChild(divElement.lastChild);
                divElement.appendChild(tempDelBtn);

                savedContainer[0].appendChild(divElement);

                delBtn.addEventListener('click', (e) => {
                    savedContainer[0].removeChild(savedContainer[0].lastChild);
                });
            });

        });

    });
}
