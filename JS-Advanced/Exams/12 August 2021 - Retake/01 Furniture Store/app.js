function solve() {
   //Todo: Write your code here!
   const section = document.getElementsByTagName('section')[1];
   const createBtn = document.getElementsByTagName('button')[0];
   const ol = document.getElementsByTagName('ol')[0];

   createBtn.addEventListener('click', e => {
      e.preventDefault();
      let creator = document.getElementById('creator').value;
      let title = document.getElementById('title').value;
      let category = document.getElementById('category').value;
      let content = document.getElementById('content').value;
   
      let delBtn = document.createElement('button');
      delBtn.className = 'btn delete';
      delBtn.textContent = 'Delete';

      let archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';

      let div = document.createElement('div');
      div.classList.add('buttons');
      div.appendChild(delBtn);
      div.appendChild(archiveBtn);

      let h1 = document.createElement('h1');
      h1.textContent = title;

      let p1 = document.createElement('p');
      p1.innerHTML = `Category: <strong>${category}</strong>`;

      let p2 = document.createElement('p');
      p2.innerHTML = `Creator: <strong>${creator}</strong>`;

      let p3 = document.createElement('p');
      p3.textContent = content;

      let articleEl = document.createElement('article');
      articleEl.appendChild(h1);
      articleEl.appendChild(p1);
      articleEl.appendChild(p2);
      articleEl.appendChild(p3);
      articleEl.appendChild(div);

      section.appendChild(articleEl);

      delBtn.addEventListener('click', e => {
          articleEl.remove();
      });

      archiveBtn.addEventListener('click', e => {
          let li = document.createElement('li');
          li.textContent = title;
          ol.appendChild(li);

          let allLi = Array.from(ol.children);
          allLi.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => {
              ol.appendChild(li);
          });
          articleEl.remove();
      });
  });
}
