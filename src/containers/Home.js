import React from "react";

import { useEffect, useState } from "react";
import strapi from "../api/strapi";

const Home = () => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async () => {
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
    <div className="App">
      {error ? error : null}
      <p> home container </p>
      {content
        ? content.map((image) => {
            let url = `${strapi.defaults.baseURL}${image["url"]}`;
            console.log(url);
            return <img src={url} alt={image["name"]} />;
          })
        : null}
    </div>
  );
};

export default Home;
