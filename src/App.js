import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
    console.log(result);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Image Search Application</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
