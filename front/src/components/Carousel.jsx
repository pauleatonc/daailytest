import React from 'react';
import useApiData from '../hooks/useApiData';

const Carousel = () => {
  const { data, loading, error } = useApiData(`${import.meta.env.VITE_API_URL}/api/v1/carousel/`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { hero } = data;

  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div key={index} className="carousel-item">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.src} alt={item.title} className="carousel-image" />
            <h3 className="carousel-title">{item.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Carousel;