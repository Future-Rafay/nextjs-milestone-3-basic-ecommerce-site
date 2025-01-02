import Link from 'next/link';
import { Products } from '@/lib/ApiData';

interface ProductCardProps {
  product: Products;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <Link href={`/product/${product.id}`}>
        <div className='flex flex-col items-center w-full h-full justify-evenly'>
          <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-md mb-4" />
          <div>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-bold text-indigo-600 mt-2">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
