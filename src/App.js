import './App.css';
import { useEffect, useState } from 'react';
import emailjs, { init } from "@emailjs/browser";
import IgLogo from './img/ig-logo.png'
import Pic from './img/col/001223810015.jpg'
import Pic2 from './img/col/001223810006.jpg'

function App() {
  const serviceID = "service_b1seiq9"
  const templateID = "template_pil7lln"
  const pub_key = "lJEzrk2uGDGKdv3gf"
  const [isColour, setIsColour] = useState(true);




  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
      // emailjs.send(serviceID, templateID, {lat: position.coords.latitude, lng: position.coords.longitude}, pub_key);
    });
  }, []);

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
        <img className='pic' src={Pic}/>
        <img className='pic' src={Pic2}/>
        <img className='pic' src={Pic}/>
        <img className='pic' src={Pic}/>
        <img className='pic' src={Pic}/>
        <img className='pic' src={Pic}/>
      </div>

    </div>
  );
}

export default App;
