import React from 'react';
import SmallCard from './SmallCard';

const Home = () => {
  return (
    <div className='w-full px-4 py-2 bg-gray-200 lg:w-full'>
      <div className='container mx-auto mt-12'>
        <SmallCard total={'Hello World'} description={' Documentation'} />
      </div>
    </div>
  );
};

export default Home;
