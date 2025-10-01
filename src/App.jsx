import React from "react";

const products = [
  { id: 1, name: "Cool Sip - Classic", tag: "250ml", price: "₹25" },
  { id: 2, name: "Cool Sip - Mint", tag: "250ml", price: "₹30" },
  { id: 3, name: "Cool Sip - Berry", tag: "250ml", price: "₹35" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cool-900 via-cool-700 to-gray-900 text-white font-sans">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">
            CS
          </div>
          <div>
            <h1 className="text-xl font-semibold">Cool Sip</h1>
            <p className="text-xs text-white/60">
              Refreshing drinks — now in your area
            </p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:flex items-center text-sm text-white/80">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#products">Products</a>
          <a className="hover:text-white" href="#place-order">Place Order</a>
          <a className="hover:text-white" href="#about">About</a>
          <button className="ml-2 px-3 py-2 rounded-md bg-white/8 hover:bg-white/12">
            Admin Login
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Taste the chill. Sip the vibe.
            </h2>
            <p className="mt-4 text-white/70">
              Handcrafted cool drinks — fruity, minty, and perfectly fizzy. Fast delivery, wholesome ingredients.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="inline-block px-6 py-3 rounded-full bg-accent text-cool-900 font-semibold shadow-md">Order Now</a>
              <a href="#about" className="inline-block px-6 py-3 rounded-full border border-white/10">Learn More</a>
            </div>
          </div>
        </section>

        <section id="products" className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Popular Drinks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="product-card bg-white/6 p-6 rounded-2xl">
                <div className="h-36 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <span className="text-5xl">🥤</span>
                </div>
                <h4 className="font-semibold">{p.name}</h4>
                <p className="text-xs text-white/60 mt-1">{p.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold">{p.price}</div>
                  <button className="px-3 py-1 rounded-md bg-accent text-cool-900 font-medium">Add</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-white/4 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">About Cool Sip</h3>
          <p className="text-white/70 mt-2">
            We craft refreshing drinks using local fruits and chill techniques. Small batches, big smiles.
          </p>
        </section>
      </main>

      <footer className="mt-16 border-t border-white/6 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">© {new Date().getFullYear()} Cool Sip</div>
          <div className="text-sm text-white/60">Made with ❤️ — clone edition</div>
        </div>
      </footer>

      <a href="#chat" className="fixed right-6 bottom-6 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold chat-bubble">
        💬
      </a>
    </div>
  );
}