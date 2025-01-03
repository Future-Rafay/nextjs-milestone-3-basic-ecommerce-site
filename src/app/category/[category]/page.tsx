// Server Component (e.g., CategoryPage.tsx)
import { Categories, Products } from '@/lib/ApiData';
import { ProductCard } from '@/components/ProductCard';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const category = params.category;  // Access the category from URL
  const products: Products[] = await Categories(category); // Fetch based on category


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold my-10 underline">Category: <span className='text-indigo-600'>{category}</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;