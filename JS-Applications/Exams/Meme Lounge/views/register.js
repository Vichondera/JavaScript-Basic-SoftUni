import { html, register } from '../src/lib.js';


const registerTemplate = (onSingup) => html `
<!-- Register Page ( Only for guest users ) -->
<section id="register">
    <form @submit=${onSingup} id="register-form">
        <div class="container">
            <h1>Register</h1>

            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">

            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>

        </div>
    </form>
</section>
`;

export async function registerView(ctx) {
    ctx.render(registerTemplate(onSingup));

    async function onSingup(s) {
        s.preventDefault();

        const form = new FormData(s.target);

        const username = form.get('username');
        const email = form.get('email');
        const password = form.get('password');
        const gender = form.get('gender');

        try {
            if (!username || !email || !password || !gender) {
                throw new Error("All fields are required!");
            }

            await register(username, email, password, gender);
            ctx.page.redirect("/");
            ctx.setNavbar();

        } catch (err) {
            alert(err.message);
        }

    }
}
