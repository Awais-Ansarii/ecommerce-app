import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_API_KEY,
  },
};


// creating a function to get data through api call 
export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, params);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
