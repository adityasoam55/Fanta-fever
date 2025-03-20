import React from "react";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image: "/images/fanta1.png",
    desc: "A refreshing and bubbly orange-flavored soft drink with a tangy twist, perfect for a fruity boost.",
    delay: 0.5,
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    title: "Fanta Zero",
    image: "/images/fanta2.png",
    desc: "Enjoy the bold, fruity taste of Fanta with zero sugar and the same great citrus punch.",
    delay: 0.8,
    bgColor: "#727272",
  },
  {
    id: 3,
    title: "Coca Cola",
    image: "/images/fanta3.png",
    desc: "The classic, crisp, and refreshing cola that has been loved for generations, with the perfect balance of fizz and flavor.",
    delay: 1.1,
    bgColor: "#ac1a00",
  },

];

const Products = () => {
  return (
    <div className="bg-gray-100 py-8" id="categories">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          Our Products
        </motion.h1>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              style={{ backgroundColor: item.bgColor }}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl"
            >
              <img
                src={item.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-45 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2 text-white">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm">{item.desc}</p>
                <motion.button
                  className="!mt-5 border-2 px-6 py-2 rounded-md duration-200 font-bold border-white"
                  style={{
                    borderColor: "white",
                    color: "white",
                  }}
                  whileHover={{
                    backgroundColor: "white",
                    color: item.bgColor,
                    scale: 1.1, 
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.9 }} 
                >
                  Buy Now
                </motion.button>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
