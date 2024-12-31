'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      console.log('ID non disponibile, interrompendo fetch');
      return;
    }

    console.log('Esegui fetch per l\'id:', id);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('Dati ricevuti:', data);
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Errore durante il fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-xl font-semibold mt-10">Loading...</p>;
  if (!product) return <p className="text-center text-xl font-semibold mt-10">Product not found!</p>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg rounded-lg p-6">
        <div className="flex-shrink-0">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full max-w-sm h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" 
          />
        </div>
        <div className="md:ml-8 mt-4 md:mt-0 max-w-lg w-full">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-2xl font-semibold mt-4 text-gray-900">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
          <div className="mt-6">

            <Link
              href="/" 
              className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
