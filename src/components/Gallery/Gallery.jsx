import { useContext } from 'react';
import ListeLogements from '../ListeLogements';
import Card from '../Card/Card';
import './gallery.scss';

export default function Gallery() {
    const logements = useContext(ListeLogements);

    return (
        <div className='gallery'>
            {logements.map(logement => (
                <Card
                  key={logement.id}
                  id={logement.id}
                  title={logement.title}
                  cover={logement.cover}
                />
            ))}
        </div>
    )
}