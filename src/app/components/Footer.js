export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 My Store. All rights reserved.</p>
          <div className="mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-2">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 mx-2">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    );
  }
  