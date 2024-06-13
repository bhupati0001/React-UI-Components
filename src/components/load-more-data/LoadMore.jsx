import React, { useEffect, useState } from 'react';
import './LoadMore.css';

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [counts, setCounts] = useState(0);
    const [allProductsLoaded, setAllProductsLoaded] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${counts === 0 ? 0 : counts * 10}`);
            const data = await response.json();

            if (data && data.products && data.products.length) {
                setProducts([...products, ...data.products]);
            } else {
                setAllProductsLoaded(true);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [counts]);

    const handleLoadMore = () => {
        setCounts(prevCounts => prevCounts + 1);
    };

    if (loading) {
        return <p>Loading Data... ! Please wait</p>;
    }

    console.log(products.length)
    return (
        <div className="wrapper">
            <div className="container">
                <div className="product-container">
                    {products && products.length ? products.map((item, index) => {
                        return (
                            <div key={index}>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                                <p>{item.title}</p>
                            </div>
                        );
                    }) : <p>No products available</p>}
                </div>
                {!allProductsLoaded && (
                    <button onClick={handleLoadMore}>Load More</button>
                )}
                {allProductsLoaded && (
                    <p>All products are loaded. No more products to show.</p>
                )}
            </div>
        </div>
    );
};

export default LoadMore;
