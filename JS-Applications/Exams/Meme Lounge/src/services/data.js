import * as auth from './auth.js';

const host = 'http://localhost:3030';
auth.settings.host = host;

export const login = auth.login;
export const register = auth.register;
export const logout = auth.logout;
