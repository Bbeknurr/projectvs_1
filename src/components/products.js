import React from 'react';
import './products.css';

const Products = () => {
    const products = [
        { img: 'img-1.jpg', price: 'ХИМЧИСТКА Салона от 15 000 kzt',  id: 1 },
        { img: 'img-2.jpg', price: 'Полировка кузова от 20 000 kzt',  id: 2 },
        { img: 'img-3.jpg', price: 'Защита деталей (бронепленка) от 10 000 kzt', id: 3 },
        { img: 'img-4.jpg', price: 'Полная обклейка кузова от 50 000 kzt', id: 4 },
        { img: 'img-5.jpg', price: 'Мойка авто 3000 kzt', id: 5 },
        { img: 'img-6.jpg', price: 'Мойка под капотом 5000 kzt', id: 6 },

    ];

    return (
        <>
            <section className="products">
                <h2 className="title-h2">Наши услуги</h2>
                <div className="box-container">
                    {products.map((product) => (
                        <div className="box" key={product.id}>
                            <span className="discount">{product.discount}</span>
                            <div className="image">
                                <img src={product.img} alt={`Product ${product.id}`} />
                            </div>
                            <div className="content">
                                <div className="price">
                                    {product.price} <span>{product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
