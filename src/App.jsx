import { useState } from "react";

export default function ElegantSareeCorner() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    const imageUrls = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setUploadedImages((prev) => [...prev, ...imageUrls]);
  };

  const sarees = [
    {
      name: "Premium Cotton Saree",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    },
    {
      name: "Elegant Crepe Saree",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1583391733981-849840e1e0e3",
    },
    {
      name: "Wedding Collection Saree",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1610189018552-1f2f1ea7d2f8",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-3xl font-bold text-pink-700">
            Elegant Saree Corner
          </h1>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-200 to-rose-100 py-20 text-center">
        <h2 className="text-4xl font-bold text-pink-700">
          Discover Elegant Sarees
        </h2>
        <p className="mt-4 text-gray-700">
          Premium sarees for every occasion
        </p>
      </section>

      {/* Products */}
      <section className="py-12 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {sarees.map((saree, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={saree.image}
                alt={saree.name}
                className="h-72 w-full object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-700">
                  {saree.name}
                </h3>
                <p className="mt-2 font-bold">{saree.price}</p>
                <button className="mt-4 w-full bg-pink-700 text-white py-2 rounded-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload */}
      <section className="py-12 px-6">
        <input type="file" multiple onChange={handleImageUpload} />
        <div className="grid grid-cols-2 gap-4 mt-6">
          {uploadedImages.map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={img.name}
              className="h-40 object-cover rounded"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
``