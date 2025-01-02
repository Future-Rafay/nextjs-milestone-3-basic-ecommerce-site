import NotFound from '@/app/not-found';
import { SingleProduct, Products } from '@/lib/ApiData';  // Adjust import based on your structure

// Server-side data fetching for the product details
const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let product: Products | null = null;

  try {
    product = await SingleProduct(Number(id));  // Fetch the product details
  } catch (error) {
    return <div><NotFound /></div>
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-md" />
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-xl font-bold text-indigo-600 mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
          <p className="text-sm text-gray-500 mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;


