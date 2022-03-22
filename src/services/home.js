import api from "../constants/api";

export const homeService = {
  review() {
    return api.get("/elearning/v4/courses");
  },
  gallery() {
    return api.get("/elearning/v4/courses");
  },
};
