import axios from "axios";

const URL = "https://672f6be2229a881691f2e2a6.mockapi.io/api/v1/users";

export const getAllUsers = async () => {
  return await axios.get(URL);
};
