window.addEventListener('load', solve);

function solve() {
    let modelEl = document.getElementById('model');
    let yearEl = document.getElementById('year');
    let descriptionEl = document.getElementById('description');
    let priceEl = document.getElementById('price');

    let addBtnEl = document.getElementById('add');

    addBtnEl.addEventListener('click', (el) => {
        el.preventDefault();

        let model = modelEl.value;
        let year = Number(yearEl.value);
        let desc = descriptionEl.value;
        let price = Number(priceEl.value);

        if (!model || !desc || !year || !price) {
            return;
        }

        modelEl.value = '';
        yearEl.value = '';
        descriptionEl.value = '';
        priceEl.value = '';

        let furnitureList = document.getElementById('furniture-list');

        let tr1 = document.createElement('tr');
        tr1.className = 'info';

        let td1 = document.createElement('td');
        td1.textContent = `${model}`;
        let td2 = document.createElement('td');
        td2.textContent = `${price.toFixed(2)}`;

        let td3 = document.createElement('td');

        let moreBtnEl = document.createElement('button');
        moreBtnEl.className = 'moreBtn';
        moreBtnEl.innerText = 'More Info';

        let buyBtnEl = document.createElement('button');
        buyBtnEl.className = 'buyBtn';
        buyBtnEl.textContent = 'Buy it';

        td3.appendChild(moreBtnEl);
        td3.appendChild(buyBtnEl);

        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        furnitureList.appendChild(tr1);

        let trListEl = document.createElement('tr');
        trListEl.className = 'hide';

        let tdYear = document.createElement('td');
        tdYear.innerText = `Year: ${year}`;

        let tdColspan = document.createElement('td');
        tdColspan.colspan = 3;
        tdColspan.textContent = `Description: ${desc}`;

        trListEl.appendChild(tdYear);
        trListEl.appendChild(tdColspan);
        furnitureList.appendChild(trListEl);

        moreBtnEl.addEventListener('click', (el) => {
            moreBtnEl.innerText = 'Less Info';
            moreBtnEl.style = 'display: contents;';
        });

        buyBtnEl.addEventListener('click', (el) => {
            furnitureList.removeChild(furnitureList.lastChild);
            furnitureList.removeChild(furnitureList.lastChild);
            moreBtnEl.innerText = 'Less Info';
            moreBtnEl.style = 'display: contents;';
            
            let t = document.getElementsByClassName('total-price');
            let totalPrice = price + Number(t[0].innerHTML);
            t[0].innerHTML = `${totalPrice.toFixed(2)}`;

        });


    });

}
