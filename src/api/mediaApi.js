import axios from "axios";

// API_KEY for Data Fetching
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;

// Fetch Photo Function
export const fetchPhoto = async (query, page = 1, per_page = 20) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    });
    // console.log("Res is from api => ", res.data.results);
    // console.log("Res is from api => ", res);
    return res.data;
  } catch (error) {
    console.log("Error is ", error);
  }
};

// Fetch Video Function
export const fetchVideo = async (query, per_page = 20) => {
  try {
     const res = await axios.get('https://api.pexels.com/videos/search',{
      params: {
        query,
        per_page,
      },
      headers: {
       Authorization : PEXELS_KEY
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Fetch GIF Function

export const fetchGIF = async (query, limit = 20) => {
  try {
    const res = await axios.get("https://tenor.googleapis.com/v2/search", {
      params: {
        q: query,
        key: TENOR_KEY,
        limit,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
