import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching images:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="wrapper">
            <div className="slider">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <div className="slides">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.download_url}
                            alt={`Slide ${index}`}
                            className={index === currentSlide ? 'active' : ''}
                        />
                    ))}
                </div>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
