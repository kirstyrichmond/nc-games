import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://be-nc-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getAllReviews = (category, order, sort_by) => {
  return gamesApi
    .get(`/reviews`, {
      params: {
        category,
        order,
        sort_by,
      },
    })
    .then(({ data }) => {
      return data.reviews;
    });

  //   let review = `/reviews`;

  //   if (category) {
  //     review += `?category=${category}`;
  //   }

  //   return gamesApi.get(review).then(({ data }) => {
  //     console.log(data.reviews);
  //     return data.reviews;
  //   });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVote = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      console.log(data.review, "<< update vote");
      return data.review;
    });
};

export const postComment = (review_id, commentData) => {
  console.log(review_id, commentData, "<< review id and comment data");
  return gamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: commentData.username,
      body: commentData.body,
    })
    .then(({ data }) => {
      console.log(data.comment, "<< new comment in api");
      return data.comment;
    });
};
