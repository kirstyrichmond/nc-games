import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://be-nc-games-app.herokuapp.com/api",
});

// -------- GET ---------- //

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getAllReviews = (category, sort_by, order) => {
  return gamesApi
    .get(`/reviews`, {
      params: {
        category,
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      console.log(data.reviews);
      return data.reviews;
    });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const getUsers = () => {
  return gamesApi.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const getUserByUsername = (username) => {
  return gamesApi.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

// -------- PATCH ---------- //

export const patchReviewVote = (review_id, num) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: num })
    .then(({ data }) => {
      return data.review;
    });
};

export const patchCommentVote = (comment_id, num) => {
  return gamesApi
    .patch(`/comments/${comment_id}`, { inc_votes: num })
    .then(({ data }) => {
      return data.comment;
    });
};

// -------- POST ---------- //

export const postComment = (review_id, commentData) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, commentData)
    .then(({ data }) => {
      console.log(data.comment, "<< new comment in api");
      return data.comment;
    });
};

export const postReview = (newReview) => {
  return gamesApi.post(`/reviews`, newReview).then(({ data }) => {
    return data.reviews;
  });
};

export const postUser = (newUser) => {
  return gamesApi.post(`/users`, newUser).then(({ data }) => {
    console.log(data.user, "<< new user in the api");
    return data.user;
  });
};

// -------- DELETE ---------- //

export const deleteComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data.comment;
  });
};
