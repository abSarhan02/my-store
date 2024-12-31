import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <Link href={`/products/${product.id}`} passHref>
        <img
          className="rounded-t-lg w-full h-40 object-contain p-2"
          src={product.image}
          alt={product.title}
        />
        <div className="p-5">
          <h5 className="mb-2 text-lg font-semibold text-gray-900 truncate">
            {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
          </h5>
          <p className="mb-3 text-sm text-gray-700">${product.price.toFixed(2)}</p>
          <p className="mb-3 text-xs text-gray-500 overflow-hidden text-ellipsis h-12">
            {product.description.length > 60 ? `${product.description.substring(0, 60)}...` : product.description}
          </p>
          <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
            View Details
          </div>
        </div>
      </Link>
    </div>
  );
}
