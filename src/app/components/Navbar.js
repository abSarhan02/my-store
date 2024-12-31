import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link href="/">My Store</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
        
        </div>
      </div>
    </nav>
  );
}
