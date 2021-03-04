import React from "react";

import { useEffect, useState } from "react";
import strapi from "../api/strapi";

const Home = () => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await strapi.get("/home-images", {
        params: {},
      });
      const images = response.data.map((obj) => obj["main_image_content"][0]);
      setContent(images);
    } catch (err) {
      setError(`Something went wrong...`);
    }
  };

  useEffect(() => {
    searchApi();
  }, []);

  return (
    <div>
      {error ? error : null}
      home container
      {console.log(content, "content")}
    </div>
  );
};

export default Home;
