import member1 from "../assets/members/Jonayet_hossen.jpg";
import Container from "./Container";

export function NewArrivals() {
  const books = Array(4).fill({ title: "Modern Learning", price: "$12.99" });

  return (
    <section className="bg-gray-50 text-primary-text py-16">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-white p-4 shadow-sm border border-gray-100 rounded-sm"
            >
              <img
                src={member1}
                className="w-full h-48 object-cover mb-4"
                alt="book"
              />
              <h3 className="font-bold text-gray-800">{book.title}</h3>
              <p className="text-green-600 font-bold mt-2">{book.price}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
