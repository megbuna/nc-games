import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://michaels-games-s5fi.onrender.com/api/'});

export const getReviews = () => {
    return gamesApi.get('/reviews').then((res) => {
        return res.data.reviews
    });
};

export const getGenres = () => {
    return gamesApi.get('/categories').then((res) => {
        return res.data.categories
    })
}