import React, { useState } from "react";
import { ModalFooter, Button, Modal, ModalHeader, ModalBody, } from 'reactstrap'
import './Cards.css'
import axios from "axios";

const UserCards = (props) => {
  const {
    name,
    images,
    description,
    total_episodes,
    external_urls,
    explicit,
    publisher,
    _id,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const deleteFunction = () => {
    axios.delete(`http://localhost:8000/playlists/${_id}`);
    window.location.reload();
  };

  return (
    <div className="cards user-cards">
      <div className="card" onClick={() => setModal(!modal)}>
        {images.length ? (
          <img width={"100%"} src={images[0].url} alt=""/>
        ) : (
          <div>No Image</div>
        )}
      </div>

      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody className="text-center">
          {images.length ? (
            <img width={"50%"} src={images[1].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
        </ModalBody>
        <ModalBody className="text-center">{description}</ModalBody>
        <ModalBody
          className="text-center"
          style={{ color: explicit === true ? "red" : "green" }}
        >
          {explicit === true ? "EXPLICIT" : "CLEAN"}
        </ModalBody>
        <ModalBody className="text-center">
              Published by: {publisher}
        </ModalBody>    
        <ModalBody className="text-center">
            Total Episodes: {total_episodes}
        </ModalBody>
        <ModalFooter>
          <div className="spotify-button">
              <a href={external_urls.spotify} target="_blank" rel="noopener noreferrer"> 
                <img src="/images/Listen-on-Spotify-badge@2x.png" width="100%" alt="listen on spotify button"/>
              </a>
          </div>
          <Button color="success" onClick={deleteFunction}>
            Remove
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserCards;