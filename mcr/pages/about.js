import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <h1>About</h1>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}