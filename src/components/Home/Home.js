// App component that brings everything together
import React from 'react';
import CardGrid from '../Card/CardGrid';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header'; // Import the Header component

const Home = () => {
  return (
    <div className="app">
      <Header /> {/* Header on top */}
      <div className="content">
        <SideBar />
        <CardGrid />
      </div>
    </div>
  );
};

export default Home;
