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
        <title>Juneteenth Celebratory Protest</title>
      </Head>
      <Header />
      <h1>Juneteenth Celebratory Protest</h1>
      <h4 style={{color: 'var(--base1)'}}>Friday June 19th | 1:00 PM ET</h4>
      <h4 style={{color: 'var(--base1)'}}>Holiday Park | Broad Ripple Indianapolis</h4>
      {/* <h4>Dunn Meadow</h4>
      <h4>3:00 PM ET</h4> */}
      <div style={{marginBottom: 10}}>
      <p>On May 25th, George Floyd was murdered by Minneapolis police. 
          This brutal killing follows the death of Sean Reed who live streamed his own murder as police laughed; Breonna Taylor who was killed in her bed at the hands of police in Louisville, Kentucky; Ahmaud Arbery who was murdered in a Georgia suburb while jogging; the heinous actions of Amy Cooper in Central Park; and centuries of police abuse and violence targeted against Black and communities of color. </p>
        <p>Juneteenth, also known as Freedom Day, or the Black Fourth of July, is an American holiday that commemorates June 19, 1865 when union soldiers entered into Texas with news that the Civil War was over and that the enslaved were now free.  
          Juneteenth is the oldest nationally celebrated commemoration of the ending of slavery in the United States. 
          Our mission is to create a Juneteenth Protest in Indianapolis June 19th, 2020 to commemorate the diverse history, culture, and beauty of what it means to be Black in America. </p>
        <VictimScroller />
        <div style={{margin: '0 auto', textAlign: 'center', }}>
          <a href="/agenda"><button style={button}>Agenda</button></a>
          <a href="/donate"><button style={button}>Donate</button></a>
          <a href="/about"><button style={button}>About</button></a>
        </div>
      
        {/* <img src='./poster_cropped.jpg' style={poster}/> */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
} 
}