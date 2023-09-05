import { useState } from 'react';
import arrow_back from './arrow_back.svg';
import arrow_forward from './arrow_forward.svg';
import useScreenSize from '../../hooks/useScreenSize'
import './slideshow.scss';

export default function Slideshow({ pictures, title }) {
  const [picture, setPicture] = useState(pictures[0]);
  const [pictureIndex, setPictureIndex] = useState(0);

  const showControls = pictures.length <= 1 ? false : true;
  const displayNumbering = useScreenSize() <= 768 ? "hidden" : "";

  function goTo(index) {
    setPicture(pictures[index]);
    setPictureIndex(index);
  }

  function previousPicture(index) {
    if(index === 0) {
      goTo(pictures.length - 1)
    }else{
      goTo(index - 1)
    }
  }

  function nextPicture(index) {
    if(index < pictures.length - 1) {
      goTo(index + 1)      
    }else{
      goTo(0)
    }
  }

  return (
    <div className='slideshow'>
      <img src={picture} alt={title + ', image ' + (pictureIndex + 1)} />
      
      <button className={showControls ? 'previous' : 'hidden'}
      onClick={() => previousPicture(pictureIndex)}>
        <img src={arrow_back} alt='flèche retour' />
      </button>

      <div className={showControls ? 'numbering '+ displayNumbering : 'hidden'}>
        <p>{pictureIndex + 1}/{pictures.length}</p>
      </div>

      <button className={showControls ? 'next' : 'hidden'}
      onClick={() => nextPicture(pictureIndex)}>
        <img src={arrow_forward} alt='flèche avant' />
      </button>      
    </div>
  )
}
