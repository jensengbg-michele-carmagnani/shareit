import React, { useState } from 'react';
import Card from '../../shared/components/UI/Card/Card';
import Button from '../../shared/FormElement/Button/Button';
import Modal from '../../shared/components/Modal/Modal';
import './PlaceItem.css';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const MapHandler = () => {
    setShowMap((prevState) => !prevState);
  };
  return (
    <>
      <Modal
        show={showMap}
        onCancel={MapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button>CLOSE</Button>}
      >
        <div className="map-containter">
          <h2>The Map</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__card">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={MapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
