import { createContext, useState, useEffect } from 'react';

const ListeLogements = createContext();

export function ListeLogementsProvider({ children }) {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/kasa/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur chargement logements:', error));
  }, []);

  return (
    <ListeLogements.Provider value={logements}>
      {children}
    </ListeLogements.Provider>
  );
}

export default ListeLogements;
