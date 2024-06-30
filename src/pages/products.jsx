import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-around gap-5 p-5">
    {products.map(product => (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-72 p-5 transition-transform transform hover:-translate-y-1" key={product.id}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-t-lg" />
        <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
        <p className="text-red-600 text-lg font-bold mt-2">${product.price}</p>
        <p className="text-gray-500 mt-1">{product.category}</p>
        <p className="text-gray-700 mt-3">{product.description}</p>
      </div>
    ))}
  </div>
);
};

export default Products;
