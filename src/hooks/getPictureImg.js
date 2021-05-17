import axios from "axios";

export const getPictureImg = async () => {
  const res = await axios.get("https://randomuser.me/api/");
  return res.data.results[0].picture.large;
};
