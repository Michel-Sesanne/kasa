import { useState, useEffect } from 'react';

// Hook personnalisé pour obtenir la taille de l'écran
export default function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    // Retirer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
}