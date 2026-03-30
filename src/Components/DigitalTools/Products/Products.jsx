import React from 'react';
import ProductCard from './ProductCard';

const Products = ({toolsData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                toolsData.map(products => <ProductCard key={products.id} products={products}></ProductCard>)
            }
        </div>
    );
};

export default Products;