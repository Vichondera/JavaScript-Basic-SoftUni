function solve() {
    const recipientNameEl = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    const addBtnElement = document.getElementById('add');
    const resetBtnElement = document.getElementById('reset');

    let ulElement = document.getElementById('list');

    let sentMailsElement = document.getElementsByClassName('sent-mails');
    let trashUlElement = document.getElementsByClassName('trash');


    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let recipientName = recipientNameEl.value;
        let title = titleElement.value;
        let message = messageElement.value;

        recipientNameEl.value = null;
        titleElement.value = null;
        messageElement.value = null;

        if (!recipientName || !title || !message) {
            return;
        }

        let liElement = document.createElement('li');
        let h4Element = document.createElement('h4');
        h4Element.textContent = `Title: ${title}`;
        liElement.appendChild(h4Element);

        let h4Element1 = document.createElement('h4');
        h4Element1.textContent = `Recipient Name: ${recipientName}`;
        liElement.appendChild(h4Element1);

        let spanElement = document.createElement('span');
        spanElement.innerText = `${message}`;
        liElement.appendChild(spanElement);

        // Send Btn
        let sendBtnElement = document.createElement('button');
        sendBtnElement.type = 'submit';
        sendBtnElement.textContent = 'Send';
        //liElement.appendChild(sendBtnElement);
        // Del Btn
        let delBtnElement = document.createElement('button');
        delBtnElement.type = 'submit';
        delBtnElement.textContent = 'Delete';

        let divElement = document.createElement('div');
        divElement.id = 'list-action';
        //liElement.appendChild(delBtnElement);
        // Add to div
        divElement.appendChild(sendBtnElement);
        divElement.appendChild(delBtnElement);
        liElement.appendChild(divElement);
        ulElement.appendChild(liElement);

        resetBtnElement.addEventListener('click', (el) => {
            el.preventDefault();
            recipientNameEl.value = '';
            titleElement.value = '';
            messageElement.value = '';
        });

        sendBtnElement.addEventListener('click',(el) => {
           
            let sendLiElement = document.createElement('li');

            let sendSpan = document.createElement('span');
            sendSpan.innerText = `To: ${recipientName}`;

            let sendSpan2 = document.createElement('span');
            sendSpan2.innerText = `Title: ${title}`;

            sendLiElement.appendChild(sendSpan);
            sendLiElement.appendChild(sendSpan2);

            let divEl = document.createElement('div');
            divEl.className = 'btn';
            divEl.appendChild(delBtnElement);
            
            delBtnElement.className = 'delete';
            sendLiElement.appendChild(delBtnElement);

            sentMailsElement[0].appendChild(sendLiElement);
            ulElement.removeChild(ulElement.lastChild);
            recipientName = '';
            title = '';
            messageE = '';
        });

        delBtnElement.addEventListener('click',(el) => {
            let delSpan = document.createElement('span');
            delSpan.innerText = `To: ${recipientName}`;

            let delSpan2 = document.createElement('span');
            delSpan2.innerText = `Title: ${title}`;

            let liElement = document.createElement('li');
            liElement.appendChild(delSpan);
            liElement.appendChild(delSpan2);
            trashUlElement[0].appendChild(liElement);

            if(ulElement.childElementCount > 0){
                ulElement.removeChild(ulElement.lastChild);
            } else {
                sentMailsElement[0].removeChild(sentMailsElement[0].lastChild);
            }      
        });

    });

}
solve();