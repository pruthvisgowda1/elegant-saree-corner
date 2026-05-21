export default function ElegantSareeCorner() {
  const sarees = [
    {
      name: 'Premium Cotton Saree',
      price: '₹999',
      image:
        'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Elegant Crepe Saree',
      price: '₹1499',
      image:
        'https://images.unsplash.com/photo-1583391733981-849840e1e0e3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Wedding Collection Saree',
      price: '₹2499',
      image:
        'https://images.unsplash.com/photo-1610189018552-1f2f1ea7d2f8?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-pink-700">
            Elegant Saree Corner
          </h1>

          <div className="hidden md:flex gap-6 font-medium">
            <a href="#home" className="hover:text-pink-600">
              Home
            </a>
            <a href="#collection" className="hover:text-pink-600">
              Collections
            </a>
            <a href="#upload" className="hover:text-pink-600">
              Upload
            </a>
            <a href="#login" className="hover:text-pink-600">
              Login
            </a>
            <a href="#contact" className="hover:text-pink-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-pink-200 to-rose-100 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight text-pink-800">
              Discover Elegant Sarees for Every Occasion
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Explore premium cotton sarees, crepe collections, festive wear,
              and affordable designer sarees crafted with elegance and style.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-pink-700 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-800 transition">
                Shop Now
              </button>

              <button className="bg-white text-pink-700 border border-pink-700 px-6 py-3 rounded-2xl shadow hover:bg-pink-100 transition">
                New Arrivals
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1610189020382-6688c7e3f5c0?q=80&w=1200&auto=format&fit=crop"
              alt="Elegant Saree"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-pink-700">
              Trending Collections
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Affordable elegance with premium quality fabrics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sarees.map((saree, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-pink-700">
                    {saree.name}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Elegant designs with modern style and premium comfort.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      {saree.price}
                    </span>

                    <button className="bg-pink-700 text-white px-5 py-2 rounded-xl hover:bg-pink-800">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto bg-pink-50 rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-6">
            Upload Saree Images
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Add your latest saree collections directly to your website.
          </p>

          <div className="border-2 border-dashed border-pink-300 rounded-3xl p-10 text-center bg-white">
            <input
              type="file"
              multiple
              className="mb-6 block mx-auto"
            />

            <button className="bg-pink-700 text-white px-8 py-3 rounded-2xl hover:bg-pink-800 transition shadow-lg">
              Upload Images
            </button>
          </div>
        </div>
      </section>

      {/* OTP Login Section */}
      <section id="login" className="py-20 px-6 bg-gradient-to-r from-rose-100 to-pink-100">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-pink-700 mb-8">
            Login with Mobile OTP
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-pink-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button className="w-full bg-pink-700 text-white py-3 rounded-2xl hover:bg-pink-800 transition shadow-lg">
              Send OTP
            </button>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                placeholder="6-digit OTP"
                className="w-full border border-pink-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-2xl hover:bg-black transition shadow-lg">
              Verify & Login
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-pink-700">
              Fast Delivery
            </h3>
            <p className="mt-4 text-gray-600">
              Quick and safe delivery across India.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-pink-700">
              Premium Quality
            </h3>
            <p className="mt-4 text-gray-600">
              Carefully selected fabrics with elegant finishing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-4">💖</div>
            <h3 className="text-2xl font-bold text-pink-700">
              Affordable Pricing
            </h3>
            <p className="mt-4 text-gray-600">
              Stylish sarees for every budget and occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-pink-800 text-white py-12 px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Elegant Saree Corner
            </h2>
            <p className="text-pink-100 leading-7">
              Bringing elegance and tradition together with affordable saree
              collections.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-pink-100">
              <li>Home</li>
              <li>Collections</li>
              <li>Login</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-pink-100">📞 +91 98765 43210</p>
            <p className="text-pink-100 mt-2">
              📧 elegantsareecorner@gmail.com
            </p>
            <p className="text-pink-100 mt-2">📍 Karnataka, India</p>
          </div>
        </div>

        <div className="border-t border-pink-600 mt-10 pt-6 text-center text-pink-100">
          © 2026 Elegant Saree Corner. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
