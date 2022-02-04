import React, { useState, useContext } from 'react';
import { AuthContext } from '../../shared/contex/auth-context';
import Card from '../../shared/components/UI/Card/Card';
import Button from '../../shared/FormElement/Button/Button';
import Modal from '../../shared/components/Modal/Modal';
import Map from '../../shared/components/Map/Map';
import './PlaceItem.css';

const PlaceItem = (props) => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWorningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  console.log(auth.isLoggedIn);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={12}></Map>
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure"
        footerClass=" place-item__modal-acrtions"
        footer={
          <>
            <Button onClick={cancelDeleteHandler} inverse>
              CANCEL
            </Button>
            <Button onClick={confirmDeleteHandler} danger>
              DELETE
            </Button>
          </>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone threafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            {auth.isLoggedIn ? (
              <>
                <Button inverse onClick={openMapHandler}>
                  VIEW ON MAP
                </Button>
                <Button to={`${props.id}`}>EDIT</Button>
                <Button onClick={showDeleteWorningHandler} danger>
                  DELETE
                </Button>
              </>
            ) : (
              <>
                <Button inverse onClick={openMapHandler}>
                  VIEW ON MAP
                </Button>
            
              </>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
