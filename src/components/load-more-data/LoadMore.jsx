import React, { useEffect, useState, useRef } from 'react';
import './LoadMore.css';

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [allProductsLoaded, setAllProductsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const isInitialMount = useRef(true);
    const abortControllerRef = useRef(null);

    const fetchProducts = async (currentPage) => {
        setLoading(true);
        // Abort any pending fetch request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();


        try {
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`, {
                signal: abortControllerRef.current.signal,
            });
            const data = await response.json();
            const { products: newProducts } = data;

            if (newProducts && newProducts.length > 0) {
                setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            } else {
                setAllProductsLoaded(true);
            }
        } catch (e) {
            if (e.name !== 'AbortError') {
                setError('Failed to load products. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
            fetchProducts(0);
        } else {
            fetchProducts(page);
        }

        // Cleanup function to abort ongoing fetch requests
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };
    return (
        <div className="wrapper">
            <div className="container">
                <div className="product-container">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div key={index}>
                                <img src={product.thumbnail} alt={product.title} />
                                <p>{product.title}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
                {error && <p className="error">{error}</p>}
                {!allProductsLoaded && !loading && (
                    <button onClick={handleLoadMore} disabled={loading}>
                        Load More
                    </button>
                )}
                {allProductsLoaded && (
                    <p>All products are loaded. No more products to show.</p>
                )}
                {loading && <p>Loading Data... ! Please wait</p>}
            </div>
        </div>
    );
};

export default LoadMore;
