import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-4 text-purple-800"
      >
        🎁 Welcome to GiftGenie!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-700 max-w-xl"
      >
        Discover the perfect gift for your loved ones using smart AI-powered suggestions tailored just for you.
      </motion.p>

      <motion.img
        src="/assets/gift-illustration.png"
        alt="Gift illustration"
        className="w-80 my-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />

      <motion.a
        href="/chat"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl text-lg hover:bg-purple-700 shadow-lg transition"
        whileHover={{ scale: 1.05 }}
      >
        Start Finding the Perfect Gift
      </motion.a>
    </div>
  );
};

export default HomePage;
