import axios from "axios";

export const UseSignUp = async (data) => {
  const res = await axios.post(
    `https://eprofile-backend.herokuapp.com/api/user/signup`,
    data,
  );
  return res.data;
};

export const UseSignIn = async (data) => {
  const res = await axios.post(
    `https://eprofile-backend.herokuapp.com/api/user/signin`,
    data,
  );
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(
    `https://eprofile-backend.herokuapp.com/api/user/${id}`,
  );
  return res.data;
};
