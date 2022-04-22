import { page, pageBuilder } from "./lib.js";
import { homeView } from '../views/home.js';
import { loginView } from '../views/login.js';
import { memesView } from '../views/allMemes.js';
import { registerView } from '../views/register.js';
import { createView } from '../views/create.js';
import { detailsView } from '../views/details.js';
import { editView } from '../views/edit.js';
import { profileView } from '../views/profile.js';

page(pageBuilder);
page("/", homeView);
page("/index.html", homeView);
page("/homeView", homeView);
page("/login", loginView);
page("/allMemes", memesView);
page("/register", registerView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/profile", profileView);

page.start();
