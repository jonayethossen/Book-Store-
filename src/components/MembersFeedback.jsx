import { FaComments } from "react-icons/fa";
import Container from "./Container";

export default function MembersFeedback() {
  const feedbacks = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae repellat laborum quam molestiae.",
      author: "Abdul Karim",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae repellat laborum quam molestiae.",
      author: "Abdul Karim",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae repellat laborum quam molestiae.",
      author: "Abdul Karim",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16">
      {" "}
      {/* ছবির মতো হালকা গ্রে ব্যাকগ্রাউন্ড */}
      <Container>
        {/* Title with Icon */}
        <div className="flex gap-3 text-3xl font-bold items-center justify-center text-[#1f2937] mb-12">
          <FaComments />
          <h2>Member's Feedback</h2>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item) => (
            <div
              key={item.id}
              className="bg-[#e5e7eb] p-8 rounded-lg shadow-lg border border-gray-300 flex flex-col justify-between min-h-50"
            >
              {/* Feedback Text */}
              <p className="text-gray-700 italic leading-relaxed">
                "{item.text}"
              </p>

              {/* Author Name - Aligned to Right as per Image */}
              <div className="mt-6 text-right">
                <span className="font-bold text-gray-900 border-t-2 border-gray-400 pt-1">
                  ___{item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
