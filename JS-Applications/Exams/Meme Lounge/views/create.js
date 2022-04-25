import { html, createMeme } from '../src/lib.js';

const createTemplate = (onCreate) => html `
<!-- Create Meme Page ( Only for logged users ) -->
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">

        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>

    </form>
</section>
`;

export async function createView(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(c) {
        c.preventDefault();

        const form = new FormData(c.target);

        const title = form.get('title');
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');

        try {
            if (!title || !description || !imageUrl) {
                throw new Error("All fields are required!");
            }

            await createMeme(title, description, imageUrl);
            ctx.page.redirect("/allMemes");
            ctx.setNavbar();

        } catch (err) {
            alert(err.message);
        }
    }
}
