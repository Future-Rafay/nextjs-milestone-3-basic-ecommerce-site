// Server Component (e.g., CategoryPage.tsx)
import { Categories, Products } from "@/lib/ApiData";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

// Utility function to format category names
const formatCategoryName = (category: string) => {
  return category
    .replace(/%20/g, " ") // Replace URL encoding
    .replace(/'/g, "’"); // Replace single quotes with typographic quotes
};

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const rawCategory = params.category; // Access the category from URL
  const formattedCategory = formatCategoryName(rawCategory); // Format category name
  const products: Products[] = await Categories(rawCategory.toLowerCase()); // Fetch products

  // Category descriptions (customizable)
  const categoryDescriptions: { [key: string]: string } = {
    "Electronics": "Discover the latest gadgets and devices.",
    "Jewelry": "Explore exquisite jewelry for all occasions.",
    "Men’s Clothing": "Find stylish and comfortable men's wear.",
    "Women’s Clothing": "Shop trendy and elegant outfits for women.",
  };

  const description =
    categoryDescriptions[formattedCategory] ||
    "Explore our wide range of products.";

  return (
    <div className="container mx-auto p-4">
      {/* SEO Metadata */}
      <head>
        <title>{`${formattedCategory} | VividCart`}</title>
        <meta
          name="description"
          content={`Browse the best ${formattedCategory} products on VividCart.`}
        />
      </head>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/">Home</Link> <span className="mx-1">/ <Link href='/category'>Category</Link> </span>
        <span className="capitalize">/ {formattedCategory}</span>
      </nav>

      {/* Heading and Description */}
      <header className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-primary">
          {formattedCategory}
        </h1>
        <p className="text-sm md:text-lg text-gray-600">{description}</p>
      </header>

      {/* Product Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          Sorry, no products found in the <strong>{formattedCategory}</strong> category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className=" mt-8 md:mt-16 flex justify-center">
        <button
          disabled
          className="bg-gray-200 text-gray-500 px-4 py-2 rounded cursor-not-allowed"
        >
          Pagination coming soon
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
