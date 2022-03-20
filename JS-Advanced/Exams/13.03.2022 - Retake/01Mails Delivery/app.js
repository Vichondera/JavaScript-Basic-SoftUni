function solve() {
    const buttons = {
        addButton: document.getElementById('add'),
        resetButton: document.getElementById('reset'),
        sendBtn: document.createElement('button'),
        deleteBtn: document.createElement('button'),
    
    };
    const input = {
        recipientEl: document.getElementById('recipientName'),
        titleEl: document.getElementById('title'),
        messageEl: document.getElementById('message'),
    };
    const mailListEl = document.getElementById('list');
    const sendListEl = document.getElementsByClassName('sent-list');
    const trashEl = document.getElementsByClassName('delete-list');
    // RESET BUTTON
    buttons.resetButton.addEventListener('click', (r) => {
        r.preventDefault();

        input.recipientEl.value = '';
        input.titleEl.value = '';
        input.messageEl.value = '';
    });
    // ADD BUTTON
    buttons.addButton.addEventListener('click', (a) => {
        a.preventDefault();
        // Get values from input
        let recipient = input.recipientEl.value;
        let title = input.titleEl.value;
        let msg = input.messageEl.value;
        // If any of Fields is empty,
        // program should not do anything.
        if (!recipient || !title || !msg) {
            return;
        }
        // clear input field
        buttons.resetButton.click();
        // Add Mail to <ul id="list">
        let liEl_1 = document.createElement('li');

        let h4TitleEl = document.createElement('h4');
        h4TitleEl.textContent = `Title: ${title}`;

        let h4NameEl = document.createElement('h4');
        h4NameEl.textContent = `Recipient Name: ${recipient}`;

        let spanListEl = document.createElement('span');
        spanListEl.textContent = `${msg}`;

        liEl_1.appendChild(h4TitleEl);
        liEl_1.appendChild(h4NameEl);
        liEl_1.appendChild(spanListEl);
    
        let divListEl = document.createElement('div');
        buttons.sendBtn.type = 'submit';
        buttons.sendBtn.id = 'send';
        buttons.sendBtn.innerHTML = 'Send';
        divListEl.appendChild(buttons.sendBtn);
    
        buttons.deleteBtn.type = 'submit';
        buttons.deleteBtn.id = 'delete';
        buttons.deleteBtn.innerHTML = 'Delete';
        divListEl.appendChild(buttons.deleteBtn);
        // Add div --> Li and Li--> ul
        liEl_1.appendChild(divListEl);
        mailListEl.appendChild(liEl_1);

        buttons.deleteBtn.addEventListener('click',(d) => {
            d.preventDefault();

           if(mailListEl.childElementCount > 0){
               mailListEl.removeChild(mailListEl.lastChild);
           }
           sendListEl[0].removeChild(sendListEl[0].lastChild);
           let li = document.createElement('li');

           let spanTo = document.createElement('span');
           spanTo.textContent = `To: ${recipient}`;

           let spanTitle = document.createElement('span');
           spanTitle.textContent = `Title: ${title}`;

           li.appendChild(spanTo);
           li.appendChild(spanTitle);
           trashEl[0].appendChild(li);
        });
        // SEND BUTTON
        buttons.sendBtn.addEventListener('click', (s) => {
            s.preventDefault();
            
            let sendMailLiEl = document.createElement('li');

            let spanTo = document.createElement('span');
            spanTo.textContent = `To: ${recipient}`;

            let spanTitle = document.createElement('span');
            spanTitle.textContent = `Title: ${title}`;

            sendMailLiEl.appendChild(spanTo);
            sendMailLiEl.appendChild(spanTitle);

            let sendDivEl = document.createElement('div');
            sendDivEl.className = 'btn';

            sendDivEl.appendChild(buttons.deleteBtn);
            sendMailLiEl.appendChild(sendDivEl);

            sendListEl[0].appendChild(sendMailLiEl);
            mailListEl.removeChild(mailListEl.lastChild);         
        });
    });
}
