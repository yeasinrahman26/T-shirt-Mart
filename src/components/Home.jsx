import React from 'react';
import Banner from './Banner';
import ProductList from './product/ProductList';

const Home = () => {
    return (
      <div className='space-y-5'>
        <div className='my-5'>
          <Banner></Banner>
        </div>
        <div>
            
            <ProductList></ProductList>
        </div>
      </div>
    );
};

export default Home;