import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <h1>Recipes</h1>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}