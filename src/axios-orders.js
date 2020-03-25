import axios from 'axios'

const fireBaseBurgerApi = process.env.REACT_APP_FIREBASE_BURGER_APP;

const instance = axios.create({
    baseURL: fireBaseBurgerApi
});

export default instance;