import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'fafd1d178dmshd425bdbf538ec89p12fc03jsnc0b05368463c',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
