import axios from "axios";

export const UseSignUp = async (data) => {
  const res = await axios.post(`http://localhost:5000/api/user/signup`, data);
  return res.data;
};

export const UseSignIn = async (data) => {
  const res = await axios.post(`http://localhost:5000/api/user/signin`, data);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`http://localhost:5000/api/user/${id}`);
  return res.data;
};
