import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://be-nc-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getAllReviews = (category, sort_by, order) => {
  console.log(category, "<< category in api");
  console.log(sort_by, "<< sort by in api");
  console.log(order, "<< order by in api");
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

export const patchVote = (review_id, num) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: num })
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
