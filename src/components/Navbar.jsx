export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* left sight for logo */}
      <div className="flex-shrink-0">
        <img
          src="../../public/book-store_logo.png"
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>
      {/* center position item */}
      <div className="flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">
          Home
        </a>
        <a
          href="/catalogue"
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          Catalogue
        </a>
        <a
          href="/registration"
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          Registration
        </a>
        <a
          href="/login"
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          Login
        </a>
      </div>
      {/* rightt site */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
          Call Now
        </button>
      </div>
    </nav>
  );
}
