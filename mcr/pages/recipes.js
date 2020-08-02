import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ReactPlayer from 'react-player';

const img ={
  backgroundImage: 'url("./garage.png"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  height: '25vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  marginBottom: '25px',
  opacity: 0.8,
}

const text ={
  textAlign: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'var(--black)',
  fontWeight: 'bold',
  padding: '10px',
  background: 'rgba(255, 255, 255, .77)',
  fontSize: '40pt',
  fontWeight: 'bold',
}

const recipe ={
  marginBottom: '25px',
}

export default class Recipes extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Recipes</title>
      </Head>
      <Header />
      <div style={img}>
        <div style={text}>
          <p>RECIPES</p>
        </div>
      </div>

      <div>
        <CardGroup style={recipe}>
          <Card>
            <ReactPlayer url='https://www.youtube.com/watch?v=L6yX6Oxy_J8' loop='true' width='100%' controls='true'/>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
              <Card.Title><h4>Burgers</h4></Card.Title>

                <h6>Time</h6>
                <p>45 mins</p>

                <h6>Ingredients</h6>
                <ul>
                  <li>Ground Beef</li>
                  <li>Buns</li>
                  <li>Cheese</li>
                </ul>

                <h6>Instructions</h6>

              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Launch />
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup style={recipe}>
          <Card>
            <ReactPlayer url='https://www.youtube.com/watch?v=L6yX6Oxy_J8' loop='true' width='100%' controls='true'/>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
              <Card.Title><h4>Burgers</h4></Card.Title>

                <h6>Time</h6>
                <p>45 mins</p>

                <h6>Ingredients</h6>
                <ul>
                  <li>Ground Beef</li>
                  <li>Buns</li>
                  <li>Cheese</li>
                </ul>

                <h6>Instructions</h6>
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Launch />
            </Card.Footer>
          </Card>
        </CardGroup>
        
        <CardGroup style={recipe}>
          <Card>
            <ReactPlayer url='https://www.youtube.com/watch?v=L6yX6Oxy_J8' loop='true' width='100%' controls='true'/>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
              <Card.Title><h4>Burgers</h4></Card.Title>

                <h6>Time</h6>
                <p>45 mins</p>

                <h6>Ingredients</h6>
                <ul>
                  <li>Ground Beef</li>
                  <li>Buns</li>
                  <li>Cheese</li>
                </ul>

                <h6>Instructions</h6>
                
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Launch />
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}

function Launch() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        Click here to view full recipe
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Burgers</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Time</h6>
        <p>45 mins</p>

        <h6>Ingredients</h6>
        <ul>
          <li>Ground Beef</li>
          <li>Buns</li>
          <li>Cheese</li>
        </ul>

        <h6>Instructions</h6>
        <ul>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Step 5</li>

        </ul>
      </Modal.Body>
    </Modal>
  );
}