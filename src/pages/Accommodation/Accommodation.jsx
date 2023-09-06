import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ListeLogements from '../../components/ListeLogements';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse'
import starActive from './star_active.svg';
import starInactive from './star_inactive.svg';
import './accommodation.scss';

export default function Accommodation() {
  const { id } = useParams();
  const logements = useContext(ListeLogements);
  const logement = logements.find((element) => element.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }  

  return (
    <section className='accommodation'>      
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <div className='presentation'>
        <div className='title-location-and-tags'>
          <h1>{logement.title}</h1>
          <p className='location'>{logement.location}</p>
          <div className='tags'>
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <article className='host-and-rating'>
          <div className='host'>
            <h2>
              {logement.host.name.split(' ')[0]}<br />
              {logement.host.name.split(' ')[1]}
            </h2>            
            <img src={logement.host.picture} alt="portrait de l'hôte" />
          </div>
          <div className='rating'>
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={index < logement.rating ? starActive : starInactive}
                alt={"note sur 5 : " + logement.rating}
              />
            ))}
          </div>
        </article>      
      </div>

      <div className='details'>
        <div className='collapse'>
          <Collapse title='Description' content={logement.description} size='medium' />
        </div>
        <div className='collapse'>
          <Collapse title='Équipements' content={logement.equipments} size='medium' />
        </div>        
      </div>
    </section>
  );
}
