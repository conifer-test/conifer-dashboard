import React from 'react';
import SmallCard from './SmallCard';

const Home = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const url = 'https://conifer-test.github.io/';
    window.open(url, '_blank');
  };

  return (
    <div className='w-full px-4 py-2 bg-gray-200 lg:w-full'>
      <div className='container mx-auto mt-12' onClick={handleClick}>
        <SmallCard
          total={'Documentation'}
          description={"Read Conifer's full documentation here"}
        />
      </div>
    </div>
  );
};

export default Home;
