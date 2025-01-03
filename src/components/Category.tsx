// "use client";

// import { useEffect, useState } from "react";
// import { Products } from "@/lib/ApiData";
// import { Skeleton } from "@/components/ui/skeleton";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { FeaturedProductsCard } from "./FeaturedProductsCard";
// import { FaPaperPlane } from "react-icons/fa";

// const Categories = () => {
//   const [products, setProducts] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState<string>("women's clothing"); // Set default category

//   const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

//   // Fetch all products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Filter products based on the selected category
//   const filteredProducts = products.filter(
//     (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
//   );

//   if (loading) {
//     // Skeleton loader while products are being fetched
//     return (
//       <div className="container mx-auto p-8">
//         <h2 className="text-4xl font-bold text-center mb-10">
//           Loading <span className="text-indigo-600">Categories...</span>
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {[...Array(4)].map((_, index) => (
//             <Skeleton key={index} className="h-64 w-full rounded-lg" />
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       className="container mx-auto p-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Explore <span className="text-indigo-600">Categories</span>
//       </h2>

//       {/* Buttons for each category */}
//       <div className="flex justify-center gap-4 mb-8">
//         {categories.map((category) => (
//           <Button
//             key={category}
//             className={`${
//               selectedCategory === category.toLowerCase()
//                 ? "bg-indigo-700 hover:bg-indigo-800"
//                 : "bg-indigo-600 hover:bg-indigo-700"
//             } text-white`}
//             onClick={() => setSelectedCategory(category.toLowerCase())}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>

//       {/* Display products of selected category */}
//       {selectedCategory && (
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
//             {selectedCategory}
//           </h3>
//           {filteredProducts.length === 0 ? (
//             <p className="text-center text-gray-600">No products found in this category.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filteredProducts.slice(0, 4).map((product) => (
//                 <FeaturedProductsCard key={product.id} product={product} />
//               ))}
//             </div>
//           )}

//           {/* View All button */}
//           <div className="mt-8  text-center">
//           <Link href={`/category/${selectedCategory}`}>
//           <Button
//             className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2"
//           >
//             View All {selectedCategory}
//             <FaPaperPlane className="w-5 h-5" />
//           </Button>
//         </Link>
//       </div>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Categories;

"use client";

import { useEffect, useState } from "react";
import { Products } from "@/lib/ApiData";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FeaturedProductsCard } from "./FeaturedProductsCard";
import { FaPaperPlane } from "react-icons/fa";

const Categories = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("women's clothing"); // Set default category

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  // Fetch all products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  if (loading) {
    // Skeleton loader while products are being fetched
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Loading <span className="text-indigo-600">Categories...</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Explore <span className="text-indigo-600">Categories</span>
      </h2>

      {/* Buttons for each category */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            className={`${
              selectedCategory === category.toLowerCase()
                ? "bg-indigo-700 hover:bg-indigo-800"
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white`}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Display products of selected category */}
      {selectedCategory && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
            {selectedCategory}
          </h3>
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 4).map((product) => (
                <FeaturedProductsCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* View All button */}
          <div className="mt-8 text-center">
            <Link href={`/category/${selectedCategory}`}>
              <Button
                className="bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2"
              >
                View All {selectedCategory}
                <FaPaperPlane className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Categories;
