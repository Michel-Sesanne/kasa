import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ListeLogements from '../../components/ListeLogements';
import Slideshow from '../../components/Slideshow/Slideshow';
import './accommodation.scss';

export default function Accommodation() {
  const { id } = useParams();
  const logements = useContext(ListeLogements);

  const accommodationData = logements.find((accommodation) => accommodation.id === id);
  const accommodationPictures = accommodationData.pictures;
  const accommodationTitle = accommodationData.title;

  if (!accommodationData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className='accommodation'>      
      <Slideshow pictures={accommodationPictures} title={accommodationTitle} />
    </div>
  );
}
