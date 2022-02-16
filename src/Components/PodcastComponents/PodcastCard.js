import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "../UserComponents/Cards.css";
import axios from "axios";

const PodcastCard = (props) => {
  const { id, name, category, image_url, external_urls } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/playlists`, {
      name: name,
      category: category,
      image_url: image_url,
      id: id,
      external_urls: external_urls,
    });
  };

  return (
    <div>
      <br />
      <br />
      <br />
      {/* These breaks are just a bandaid, will fix actual cards with css */}
      <Card>
        <CardBody>
          <CardTitle tag="h5">Podcast Title: {name}</CardTitle>
          <CardText>Category: {category}</CardText>
          <CardText>
            <img width={"60%"} src={image_url} alt="podcast" />
          </CardText>
          <Button onClick={handleSubmit} color="primary">
            THIS IS A POST ROUTE
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PodcastCard;
