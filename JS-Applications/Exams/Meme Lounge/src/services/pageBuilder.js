import { html, render, page, logout } from '../lib.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

setNavbar();

export function pageBuilder(ctx, next) {
    ctx.setNavbar = setNavbar;
    ctx.render = (content) => render(content, main);
    next();
}

function setNavbar() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        document.getElementsByClassName('user')[0].style.display = 'block';
        document.getElementsByClassName('guest')[0].style.display = 'none';
        document.getElementsByClassName('user')[0].children[1].children[0].textContent = `Welcome, ${sessionStorage.getItem('email')}`;
    } else {
        document.getElementsByClassName('user')[0].style.display = 'none';
        document.getElementsByClassName('guest')[0].style.display = 'block';
    }
}

async function onLogout() {
    await logout();
    setNavbar();
    page.redirect('/');
}
