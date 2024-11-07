import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import EditorChoice from '../components/EditorChoice';
import '../assets/styles/main.css';


const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <EditorChoice />
      </main>
    </div>
  );
};

export default Home;