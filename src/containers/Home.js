import React from "react";

import { useEffect, useState } from "react";
import strapi from "../api/strapi";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Home = () => {
  const [images, setImages] = useState([]);
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");

  const getImages = async () => {
    try {
      const response = await strapi.get("/home-images", {
        params: {},
      });
      const images = response.data.map((obj) => obj["main_image_content"][0]);
      setImages(images);
    } catch (err) {
      setError(`Something went wrong...`);
    }
  };

  const getAbout = async () => {
    try {
      const response = await strapi.get("/about", {
        params: {},
      });
      setAbout(response["data"]["about_content"]);
    } catch (err) {
      setError(`Something went wrong...`);
    }
  };

  useEffect(() => {
    getImages();
    getAbout();
  }, []);

  return (
    <Container className="home">
      {error ? error : null}
      <Row>home container</Row>
      <Row>
        {images
          ? images.map((image) => {
              let url = `${strapi.defaults.baseURL}${image["url"]}`;
              return <Image src={url} alt={image["name"]} />;
            })
          : null}
      </Row>
      <Row>{about}</Row>
    </Container>
  );
};

export default Home;
