import axios from "axios";

const gamesApi = axios.create({
  baseURL: "http://be-nc-games-app.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    console.log(data, "<< list of categories");
    return data.categories;
  });
};

// export const getCategoryBySlug = (slug) => {
//   let categories = `/categories/`;
//   if (slug) {
//     categories += `${slug}`;
//   }

//   return gamesApi.get(categories).then(({ data }) => {
//     return data.categories;
//   });
// };

export const getAllReviews = (review_id) => {
  let review = `/reviews/`;

  if (review_id) {
    review += `${review_id}`;
  }

  return gamesApi.get(review).then(({ data }) => {
    console.log(data.reviews);
    return data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    console.log(data.review);
    return data.review;
  });
};
