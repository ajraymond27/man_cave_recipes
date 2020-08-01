import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <h1>Jim's Garage Sweet Garage</h1>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}