import React from 'react';
import Banner from '../../components/Banner/Banner';
import landscape from '../../assets/image_source_1.jpg';
import './home.scss';

export default function Home() {
  return (
    <div className='home-container'>
        <Banner bannerImg={landscape} tagline="Chez vous, partout et ailleurs" />
    </div>
  );
};
