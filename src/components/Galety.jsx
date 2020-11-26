import React from 'react';
import Gallery from "react-photo-gallery";
import data from '../data';

function Galery() {
    return (
      <div className="Galery">
        <Gallery photos={data} /> 
      </div>
    );
  }
  
  export default Galery;
