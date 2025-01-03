// "use client";

// import { useEffect, useState } from "react";
// import { Products } from "@/lib/ApiData";
// import { ProductCard } from "@/components/ProductCard";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const Categories = () => {
//   const [products, setProducts] = useState<Products[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState<string>("Women's Clothing");

//   const categories = ["Electronics", "Men's Clothing", "Women's Clothing", "Jewelery"];

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();
//         setProducts(data);
//         setFilteredProducts(data); // Default to show all products
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

 

//   const filterByCategory = (category: string) => {
//     return products
//       .filter((product) => product.category.toLowerCase() === category.toLowerCase())
//       .slice(0, 4); // Return only 4 products per category
//   };

//   return (
//     <motion.div
//       className="container mx-auto p-8"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h2
//         className="text-4xl font-extrabold text-center mb-8 text-gray-800"
//         initial={{ y: -20 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Browse by <span className="text-indigo-600">Categories</span>
//       </motion.h2>

//       <motion.div
//         className="flex justify-center gap-4 mb-10 flex-wrap"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         {categories.map((category) => (
//           <Button
//             key={category}
//             className={`${
//               activeCategory === category
//                 ? "bg-indigo-500 text-white hover:bg-indigo-600"
//                 : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//             } transition-all duration-300 px-6 py-2 rounded-lg shadow-md font-medium`}
//             onClick={() => filterByCategory(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </motion.div>

//       {loading ? (
//         <p className="text-center text-gray-600">Loading Products...</p>
//       ) : filteredProducts.length > 0 ? (
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, scale: 0.95 },
//             visible: {
//               opacity: 1,
//               scale: 1,
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <motion.div
//               key={product.id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//             >
//               <ProductCard product={product} />
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <p className="text-center text-gray-600">No products found in this category.</p>
//       )}
//     </motion.div>
//   );
// };

// export default Categories;

"use client";

import { useEffect, useState } from "react";
import { Products } from "@/lib/ApiData";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Categories = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    : [];

  if (loading) {
    // Skeleton loader while products are being fetched
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-10">
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
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore <span className="text-indigo-600">Categories</span>
      </h2>

      {/* Buttons for each category */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            className="bg-indigo-600 text-white hover:bg-indigo-700"
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* View All button */}
          <div className="text-center mt-6">
            <Link href={`/category/${selectedCategory}`}>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                View All
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Categories;
