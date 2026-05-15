import Container from "./Container";
import bookImg from "../assets/members/Jonayet_hossen.jpg"; // আপনার ইমেজের পাথ

export default function FeaturedBooks() {
  const books = [
    {
      id: 1,
      title: "The Art of Reading",
      price: "$15.99",
      desc: "A classic guide to developing reading habits.",
    },
    {
      id: 2,
      title: "The Art of Reading",
      price: "$15.99",
      desc: "A classic guide to developing reading habits.",
    },
    {
      id: 3,
      title: "The Art of Reading",
      price: "$15.99",
      desc: "A classic guide to developing reading habits.",
    },
  ];

  return (
    <section className="bg-gray-50 text-primary-text py-16">
      <Container>
        <h2 className="text-3xl  font-bold text-center mb-12">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="card bg-white shadow-sm border border-gray-100 rounded-sm"
            >
              <figure className="p-4">
                <img
                  src={bookImg}
                  alt={book.title}
                  className="w-full h-64 object-contain"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title text-xl font-bold">{book.title}</h2>
                <p className="text-gray-500 text-sm">{book.desc}</p>
                <p className="text-green-600 font-bold text-lg">{book.price}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary w-full text-white">
                    View Book
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
