import { html, login } from '../src/lib.js';

const loginTemplate = (onLogin) => html `
<!-- Login Page ( Only for guest users ) -->
            <section id="login">
                <form id="login-form" @submit=${onLogin}>
                    <div class="container">
                        <h1>Login</h1>
                        
                        <label for="email">Email</label>
                        <input id="email" placeholder="Enter Email" name="email" type="text">
                        <label for="password">Password</label>
                        <input id="password" type="password" placeholder="Enter Password" name="password">
                        <input type="submit" class="registerbtn button" value="Login">
                        <div class="container signin">
                            <p>Dont have an account?<a href="#">Sign up</a>.</p>
                        </div>
                        
                    </div>
                </form>
            </section>
`;


export async function loginView(ctx) {
    ctx.render(loginTemplate(onLogin));

    async function onLogin(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target);
        const email = form.get("email");
        const password = form.get("password");

        try {
            if (!email || !password) {
                throw new Error("All fields are required!");
            }

            await login(email, password);
            ctx.page.redirect("/");
            ctx.setNavbar();

        } catch (err) {
            alert(err.message);
        }

    }
}
