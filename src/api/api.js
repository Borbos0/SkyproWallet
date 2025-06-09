import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wedev-api.sky.pro/api/',
});

// Список пользователей
export const getUsers = () =>
  api.get('user').then((response) => response.data.users);

// Регистрация пользователя
export const registerUser = (login, name, password) =>
  api
    .post('user', { login, name, password })
    .then((response) => response.data.user)
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        throw new Error('Пользователь с таким логином уже существует');
      }
      throw error;
    });

// Авторизация пользователя
export const loginUser = (login, password) =>
  api
    .post('user/login', { login, password })
    .then((response) => response.data.user)
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        throw new Error('Неверный логин или пароль');
      }
      throw error;
    });
