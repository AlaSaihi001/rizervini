import React from 'react';
import './style.css';

const imagesLayer1 = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  // Ajoutez autant d'images que vous le souhaitez pour la première couche
];

const imagesLayer2 = [
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
  // Ajoutez autant d'images que vous le souhaitez pour la deuxième couche
];

const imagesLayer3 = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
  // Ajoutez autant d'images que vous le souhaitez pour la troisième couche
];

function Test() {
  return (
    <div className="background-slider">
      <div className="layer layer1">
        {imagesLayer1.map((image, index) => (
          <div key={index} className="background-image" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="layer layer2">
        {imagesLayer2.map((image, index) => (
          <div key={index} className="background-image" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
      <div className="layer layer3">
        {imagesLayer3.map((image, index) => (
          <div key={index} className="background-image" style={{ backgroundImage: `url(${image})` }} />
        ))}
      </div>
    </div>
  );
}

export default Test;
