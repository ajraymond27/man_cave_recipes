import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SocialIcon } from 'react-social-icons';


const img ={
  backgroundImage: 'url("./garage.jpg"), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  height: '25vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
  marginBottom: '25px',
}

const text ={
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
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
          <h1>ABOUT</h1>
        </div>
      </div>

      <h4>Man Cave Kitchen</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      
      <h4>Donate</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

      <h4>Follow and Subscribe</h4>
      <SocialIcon url="https://www.youtube.com/" target="_blank" bgColor='var(--base2)' style={social}/>
      <SocialIcon url="https://www.instagram.com/" target="_blank" bgColor='var(--base2)' style={social}/>
      <SocialIcon url="https://www.facebook.com/" target="_blank" bgColor='var(--base2)' style={social}/>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}