import React, { useState, useEffect } from 'react';
import useApiData from '../hooks/useApiData';

const Carousel = () => {
  const { data, loading, error } = useApiData(`${import.meta.env.VITE_API_URL}/api/v1/carousel/`);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change the duration (in milliseconds) as desired

    return () => clearInterval(interval); // Clean the gap when disassembling the component
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div id="feat_posts">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div
            id={`id${index + 1}`}
            className={`feats ${index === currentIndex ? 'sel' : ''}`}
          >
            <a
              href={item.link}
              title={item.title}
              className={`id${index + 1} feat-active`}
            >
              <div
                className="carousel-img-large cover-img"
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>
            </a>
            <h3 className={`id${index + 1} feats-title feat-active-title`}>
              <span>Featured</span>
              <a href={item.link} title={item.title}>
                {item.title}
              </a>
            </h3>
          </div>

          <div className={`id${index + 1} feat-options ${index === currentIndex ? 'sel' : ''}`} rel={`id${index + 1}`}>
            <a href={item.link} title={item.title}>
              <div
                className="carousel-img-small cover-img"
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>
            </a>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Carousel;