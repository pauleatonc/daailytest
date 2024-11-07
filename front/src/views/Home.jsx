import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import EditorChoice from '../components/EditorChoice';
import '../assets/styles/main.css';


const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="afd-container-main--margin-bottom nrd-mobile--margin-top">
        <div id="feat_box" className="afd-container-main afd-desktop-e clearfix">
          <Carousel />          
          <EditorChoice />
        </div>        
      </main>
    </div>
  );
};

export default Home;