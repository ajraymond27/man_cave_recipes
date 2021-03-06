import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SocialIcon } from 'react-social-icons';
import Card from 'react-bootstrap/Card';

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

const card = {
  border: 'none',
}

const jim ={
  width: '300px',
  margin: '0 auto',
  textAlign: 'center',
}

const social = {
  width: '75px',
  height: '75px',
  marginRight: 10,
}

export default class About extends React.Component {
  constructor(props) {
      super (props);
    }
    
  render() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div style={img}>
        <div style={text}>
          <p>ABOUT</p>
        </div>
      </div>

      <h4>Man Cave Kitchen</h4>
      <Card style={card}>
        <Card.Img variant="top" src="./jim.jpeg" style={jim}/>
        <Card.Body>
          <Card.Text>
            <p>Lorem ipsum dolore sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </Card.Text>
        </Card.Body>
      </Card>      

      <h4>Follow and Subscribe</h4>
      <SocialIcon url="https://www.youtube.com/" target="_blank" bgColor='var(--base2)' style={social}/>
      <SocialIcon url="https://www.instagram.com/student_chef_519/?hl=en" target="_blank" bgColor='var(--base2)' style={social}/>
      <SocialIcon url="https://www.facebook.com/jim.stanley.7509" target="_blank" bgColor='var(--base2)' style={social}/>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}