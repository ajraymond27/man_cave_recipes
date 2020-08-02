import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';


const img ={
  backgroundImage: 'url("./garage.png"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  height: '90vh',
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
    background: 'rgba(255, 255, 255, .77)'
}

const recipe ={
  marginBottom: '25px',
}

const button ={
  background: '#000',
  borderRadius: '10px',
  border: 'none',
  color: 'var(--white)',
  fontWeight: 'bold',
  width: '35vw',
  padding: 15,
  margin: 10,
  textAlign: 'center',
}

export default class Home extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>Man Cave Recipes</title>
      </Head>
      <Header />
      <div style={img}>
        <div style={text}>
          <img src='logo.png' style={{width: '250px'}}/>
        </div>
      </div>

      <div>
        <h2>Latest Recipe</h2>

        <CardGroup style={recipe}>
        <Card>
          <ReactPlayer url='https://www.youtube.com/watch?v=L6yX6Oxy_J8' loop='true' width='100%' controls='true'/>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
            <Card.Title><h2>Burgers</h2></Card.Title>

              <h4>Time</h4>
              <p>45 mins</p>

              <h4>Ingredients</h4>
              <ul>
                <li>Ground Beef</li>
                <li>Buns</li>
                <li>Cheese</li>

              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Launch />
          </Card.Footer>
        </Card>
      </CardGroup>
      </div>


        <div style={{margin: '0 auto', textAlign: 'center', }}>
          <a href="/recipes"><button style={button}>Recipes</button></a>
          <a href="/about"><button style={button}>About</button></a>
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
          Burgers
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Time</h4>
        <p>45 mins</p>

        <h4>Ingredients</h4>
        <ul>
          <li>Ground Beef</li>
          <li>Buns</li>
          <li>Cheese</li>
        </ul>

        <h4>Instructions</h4>
        <ul>
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
          <li>Step 4</li>
          <li>Step 5</li>

        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}