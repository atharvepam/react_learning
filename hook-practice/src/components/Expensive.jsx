import React, { useState, useMemo } from "react";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "OnePlus 12" },
  { id: 4, name: "Nothing Phone" },
  { id: 5, name: "Pixel 8 Pro" }
];

function Expensive() {
  const [search, setSearch] = useState("");

  
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2> Product Search</h2>
      <input
        type="text"
        placeholder="Search a product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Expensive;
