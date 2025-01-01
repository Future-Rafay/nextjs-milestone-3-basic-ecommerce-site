import React from 'react'
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};

const page = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default page