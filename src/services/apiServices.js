import axios from "./axiosCustomize";

const createUserAPI = (userEmail, userName, userPass, userPhone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName: userName,
    email: userEmail,
    password: userPass,
    phone: userPhone,
  };
  return axios.post(URL_BACKEND, data);
};
const updateUserAPI = () => {};

export { createUserAPI, updateUserAPI };
