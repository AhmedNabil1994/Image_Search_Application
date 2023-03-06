import axios from "axios";

const SearchImages = async (term) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 9bGiX45IBXry3yJKZu8cxYk3szYZZaHSOPfCfmvj0gw",
    },
    params: {
      query: term,
    },
  });
  return res.data.results;
};

export default SearchImages;
