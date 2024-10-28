"use client"

import Cart from "@/components/client/Cart";
import Navbar from "@/components/client/Navbar";
import TrendingProducts from "@/components/client/TrendingProducts";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false)
  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <TrendingProducts />
    </main>
  );
}
