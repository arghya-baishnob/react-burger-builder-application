import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-e79d8.firebaseio.com/'
});

export default instance;