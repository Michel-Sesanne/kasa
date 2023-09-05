import { Link } from 'react-router-dom';
import './card.scss'

export default function Card({ id, title, cover }) {
    return (
        <Link to={'/accommodation/' + id} key={id} id={id}>
            <article className="card">
                <div className='text-overlay'>
                    <h2>{title}</h2>
                </div>                
                <img src={cover} alt={title} />
            </article>
        </Link>
    )
}