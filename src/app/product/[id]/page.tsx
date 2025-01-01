"use client"

// app/product/[id]/page.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const ProductDetail = () => {
  const params = useParams();
  const { id } = params; // Get the dynamic ID from the route
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        const selectedProduct = data.find((p: Product) => p.id === parseInt(id));
        setProduct(selectedProduct);
      };
      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
