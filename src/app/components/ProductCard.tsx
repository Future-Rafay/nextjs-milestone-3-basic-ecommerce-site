// components/ProductCard.tsx
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
