import Container from "./Container";
import bookCover from "../assets/members/Jonayet_hossen.jpg"; // আপনার ইমেজের পাথ

export default function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      title: "Reading Mastery",
      description: "One of the most popular books of the year.",
      price: "$19.99",
      image: bookCover,
    },
    {
      id: 2,
      title: "Reading Mastery",
      description: "One of the most popular books of the year.",
      price: "$19.99",
      image: bookCover,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <Container>
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
          Best Sellers
        </h2>

        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bestSellers.map((book) => (
            <div
              key={book.id}
              className="card card-side bg-white shadow-sm border border-gray-100 rounded-sm hover:shadow-md transition-all duration-300"
            >
              {/* Left Side: Image */}
              <figure className="w-1/3 p-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-contain"
                />
              </figure>

              {/* Right Side: Content */}
              <div className="card-body w-2/3 justify-center">
                <h2 className="card-title text-2xl font-bold text-primary-text">
                  {book.title}
                </h2>
                <p className="text-gray-500 text-sm grow-0 mb-2">
                  {book.description}
                </p>
                <p className="text-green-600 font-bold text-xl mb-4">
                  {book.price}
                </p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-primary rounded-md px-8">
                    By Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
