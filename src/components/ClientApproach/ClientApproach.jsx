// import React from 'react'
// import './ClientApproach.css'
// const ClientApproach = () => {
//   return (
//     <section className="hero">
//   <h2>How The Average Client Approaches Us</h2>
//   <p>Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum lacus sed elementum elementum lacus a sed commodo roin eget purus tellus.</p>
//   <div className="bubbles">
//     <div className="bubble">
//       Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?
//     </div>
//     <div className="bubble">
//       Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?
//     </div>
//     <div className="bubble">
//       Geachte..... Wij zijn op zoek naar een nieuwe website voor ons bedrijf dat al jarenlang actief is in de logistieke sector.
//     </div>
//   </div>
// </section>
//   )
// }

// export default ClientApproach




import React from 'react';
import './ClientApproach.css';
import Line from '../verticalline/Line';
import backendimg from '../../assets/backendimg.jpg';

const ClientApproach = () => {
  return (
    <div  style={{ backgroundColor: 'rgba(21, 7, 12, 1)'}}>
 
    <div className="client-approach">
      <h1>How The Average Client Approaches Us</h1>
      <p className='para'>
        Lorem ipsum dolor sit amet consectetur. Scelerisque bibendum lacus sed 
        elementum elementum lacus a sed commodo roin eget purus tellus.
      </p>
      <div className="cards-container">
        <div className="card">
        <div className="card-background">
            {/* <img src={backendimg} alt="Background" /> */}
          </div> 
          <div className="card-text">
            <p>Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?</p>
            <button className='btn'>Jazeker! Wanneer...</button>
          </div>
        </div>

        <div className="card">
        <div className="card-background">
            {/* <img src={backendimg} alt="Background" /> */}
          </div>
          <div className="card-text">
            <p>Hey, ik ben een beginnende ondernemer en heb een website nodig voor mijn salon. Kunnen we een gesprek inplannen?</p>
            <button className='btn'>Jazeker! Wanneer...</button>
          </div>
        </div>

        <div className="card">
        <div className="card-background">
            {/* <img src={backendimg} alt="Background" /> */}
          </div>
          <div className="card-text">
            <p>Geachte… Wij zijn op zoek naar een nieuwe website voor ons bedrijf! (dat al jarenlang actief is in de logistiek)</p>
            <button className='btn'>Hallo, zullen wij...</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClientApproach;
