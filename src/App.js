import './App.css';
import { useEffect, useState } from 'react';
import IgLogo from './img/ig-logo.png'

function App() {
  const [isColour, setIsColour] = useState(false);
  const [imageList, setImageList] = useState([]);
  
  const setImages = () => {
    if (isColour) {
      const images = require.context('./img/col', true);
      const array = images.keys().map(image => images(image));
      setImageList(array.sort(() => 0.5 - Math.random()));
    } else {
      const images = require.context('./img/bw', true);
      const array = images.keys().map(image => images(image));
      setImageList(array.sort(() => 0.5 - Math.random()));
    }
  }




  useEffect(() => {
    setImages();
  }, [isColour]);

  return (
    <div className="App">
      <div className='header'>
        <a href='https://www.instagram.com/martinmouly'><img src={IgLogo} className='ig-logo' ></img></a>
      </div>
      <div className='buttons'>
        {isColour ? (<>
          <button onClick={() => setIsColour(false)}>
          Black & White
        </button>
        <button onClick={() => setIsColour(true)} className='selected'>
          Colour
        </button></>
        ) : (<>
          <button onClick={() => setIsColour(false)} className='selected'>
          Black & White
        </button>
        <button onClick={() => setIsColour(true)}>
          Colour
        </button></>
        )
        }
        
      </div>
      <div className='content'>
      {imageList.map((image, index) => (
        <img key={index} src={image} className='pic' />
      ))}
      </div>
      <div className='footer'>
          © 2024 Martino
      </div>
    </div>
  );
}

export default App;
