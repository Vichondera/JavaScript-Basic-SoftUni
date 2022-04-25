import * as auth from './auth.js';

const host = 'http://localhost:3030';
auth.settings.host = host;

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;

export async function getMemes() {
    const memes = await auth.get(host + "/data/memes?sortBy=_createdOn%20desc");
    return memes;
}

export async function createMeme(title, description, imageUrl) {
    const result = await auth.post(host + "/data/memes", {
        title,
        description,
        imageUrl
    });
    return result;
}
