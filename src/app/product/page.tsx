import { Data, Products } from '@/lib/ApiData';  // Adjust the import according to your file structure
import { ProductCard } from '@/components/ProductCard';

const ProductsPage = async () => {
    // Fetch the data directly in the server component
    const products: Products[] = await Data();   // Placeholder for the API call (replace with actual API URL)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl text-center font-bold my-10 underline">Our <span className='text-indigo-600'>Products</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
