import "./products.css"
import ProductCard from './ProductCard';

const Products = ({allProducts, setCartItem, cartItem, setPriceCount,priceCount}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                allProducts.map(product => <ProductCard priceCount={priceCount} setPriceCount={setPriceCount} setCartItem={setCartItem} cartItem={cartItem} key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;