import { Data, Products } from "@/lib/ApiData";
import { ProductCard } from "@/components/ProductCard";


const ProductsPage = async () => {
  const products: Products[] = await Data(); // Placeholder for the API call

  return (
    <div className="min-h-screen bg-gray-50 border-x-2 border-primary">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1
            className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Explore Our <span className="text-yellow-400">Exclusive Products</span>
          </h1>
          <p
            className="mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-200"
          >
            Discover the best quality products tailored to your needs At <span className="text-secondary">Vived Cart</span>. Shop now
            and elevate your lifestyle.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-10">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-indigo-800"
        >
          Our All <span className="text-yellow-500">Products</span>
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-indigo-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Haven’t Found What You’re Looking For?</h3>
          <p className="mt-4 text-lg">
            Check out our full collection and enjoy exclusive discounts!
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-semibold transition-all">
            Browse More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
