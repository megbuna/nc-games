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
    });
};

export const getReview = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review
    });
};

export const getComments = (review_id) => {
    return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
};

export const patchReview = (review_id, patchBody) => {
    return gamesApi.patch(`/reviews/${review_id}`, patchBody).then((res) => {
        return res.data.review
    })
};

export const postComment = (review_id, newComment) => {
    return gamesApi.post(`/reviews/${review_id}/comments`, newComment).then((res) => {
        return res.data.comment
    })
};