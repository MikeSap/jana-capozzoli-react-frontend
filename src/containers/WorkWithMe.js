import React from "react";

import { useEffect, useState } from "react";
import strapi from "../api/strapi";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const Home = () => {
  const [whatIOffer, setWhatIOffer] = useState("");
  const [error, setError] = useState("");

  const getWhatIOffer = async () => {
    try {
      const response = await strapi.get("/what-i-offers/1", {
        params: {},
      });
      debugger;
      setAbout(response["data"]["what-i-offer"]);
    } catch (err) {
      setError(`Something went wrong...`);
    }
  };

  useEffect(() => {
    getWhatIOffer();
  }, []);

  return (
    <Container className="work-with-me">
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
