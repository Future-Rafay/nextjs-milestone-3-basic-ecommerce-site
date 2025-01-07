"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsFillCartFill } from "react-icons/bs"; // React Icon for Cart
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { CartProduct, getCart, handleItemCount, removeFromCart } from "@/lib/ApiData";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);



  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const fetchCart = () => {
      const items = getCart();
      setCartItems(items);
      updateTotalAmount(items);
      updateTotalItemCount(items);
    };

    fetchCart();


    // Listen for cart updates
    const handleCartUpdate = () => fetchCart();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  // Update total amount whenever cart items change
  const updateTotalAmount = (items: CartProduct[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.itemCount, 0);
    setTotalAmount(total);
  };

  const updateTotalItemCount = (items: CartProduct[]) => {
    const totalItems = items.reduce((count, item) => count + item.itemCount, 0);
    setTotalItems(totalItems);
  };

  const handleUpdateItemCount = (id: number, count: number) => {
    handleItemCount(id, count);
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, itemCount: item.itemCount + count } : item
    );
    setCartItems(updatedItems.filter((item) => item.itemCount > 0));
    updateTotalAmount(updatedItems);      // Recalculate total amount
    updateTotalItemCount(updatedItems);   // Recalculate total item count
  };



  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    updateTotalAmount(updatedItems);
  };


  return (
    <div className="bg-light-gray py-16 border-x-2 border-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center text-indigo-600 flex items-center justify-center gap-2 md:gap-4"
        >
          <span> Your Cart</span>
          <BsFillCartFill className="w-5 h-5 md:w-8 md:h-8" />
        </motion.h2>

        {/* If Cart is Empty */}
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 min-h-screen text-center text-dark-slate"
          >
            <BsFillCartFill size={60} className="mx-auto mb-4 text-indigo-600" />
            <p className="text-xl font-semibold">Your Cart is Empty</p>
            <p className="mt-4 text-gray-500">Browse our products and add them to your cart!</p>
            <div className="mt-8 w-full text-center">
              <Link href="/product">
                <Button
                  className="mx-auto bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md font-semibold flex items-center justify-center gap-2"
                >
                  See New Fashion
                  <FiArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          // If there are items in the cart
          <div className="mt-10 space-y-8">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md p-1 md:p-4 flex flex-row md:items-center sm:space-x-6 sm:space-y-0 border-2 border-solid border-gray-300"
              >
                <Link href={`/product/${item.id}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-14 sm:w-16 md:w-24  h-14 sm:h-16 md:h-24 object-contain mx-auto sm:mx-0 mr-2 md:mr-0"
                    width={96}
                    height={96}
                  />

                </Link>

                <div className="flex-1 text-left">

                  <Link href={`/product/${item.id}`}>

                    <h3 className="text-[8px] sm:text-base md:text-lg font-semibold text-dark-slate">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 mt-1 text-[10px] md:text-sm sm:text-base">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-[8px] md:text-base text-gray-500 md:mt-2">
                    Quantity:{" "}
                    <button
                      onClick={() => handleUpdateItemCount(item.id, -1)}
                      className="p-0.5 md:p-1.5 text-white bg-red-500 rounded md:ml-2 hover:bg-red-600"
                    >
                      <FaMinus className="w-2 h-2  md:w-3 md:h-3" />
                    </button>
                    <span className="text-[10px] sm:text-sm md:text-sm mx-1 md:mx-2">{item.itemCount}</span>
                    <button
                      onClick={() => handleUpdateItemCount(item.id, 1)}
                      className="p-0.5 md:p-1.5 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                      <FaPlus className="w-2 h-2 md:w-3 md:h-3" />
                    </button>
                  </p>
                </div>
                <div className="flex flex-col  justify-between  items-end">
                  <p className="ml-3 md:ml-0 text-xs md:text-base font-semibold">
                    ${(item.price * item.itemCount).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mb-1 md:mt-4 text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <FaTrashAlt className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
            {cartItems.length > 0 && (
              <div className="relative">
                <Card className="h-fit sticky top-4">
                  <CardContent className="p-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Cart Total</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between text-xs md:text-base">
                        <span>Total Items</span>
                        <span>{totalItems}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between text-xs md:text-base">
                        <span>Delivery</span>
                        <span>$0</span>
                      </div>
                      <div className="text-muted-foreground text-xs md:text-base">Free Delivery</div>
                      <Separator />
                      <div className="flex justify-between font-medium text-xs md:text-base">
                        <span>Total</span>
                        <span>${totalAmount.toFixed(2)}</span>
                      </div>
                      <Button
                        className="mt-8 mx-auto bg-secondary hover:bg-green-500 w-full sm:w-auto"
                        disabled={cartItems.length === 0}
                        onClick={() => toast.success("Proceeding to checkout!")}
                      >
                        Proceed to Checkout <MdOutlineShoppingCartCheckout />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}


          </div>

        )}


      </div>
    </div>
  );
};

export default Cart;

