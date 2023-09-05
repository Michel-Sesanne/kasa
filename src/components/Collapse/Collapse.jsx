import { useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize'
import dropdown from './dropdown.svg';
import './collapse.scss';

export default function Collapse({ title, content, size }) {
    const [status, setStatus] = useState("closed");

    const responsiveSize = useScreenSize() <= 768 ? 'small' : size;

    const toggleStatus = () => {
        setStatus((prevStatus) => (prevStatus === "closed" ? "open" : "closed"));
    }

    return (
        <article className={'dropdown ' + responsiveSize}>
            <button onClick={toggleStatus}>
                <h2>{title}</h2>
                <img className={(status === "open" ? "dropdown-open" : "")} src={dropdown} alt='dropdown' />
            </button>
            <div className={`content-wrapper ${status === "open" ? "slide" : ""}`}>
                {Array.isArray(content) ? (     //Gère le cas où le contenu est un tableau(liste)
                    <ul className='content'>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='content'>{content}</p>
                )}                
            </div>      
        </article>
    )
}