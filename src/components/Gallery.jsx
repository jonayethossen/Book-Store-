import { RiGalleryFill } from "react-icons/ri";
import Container from "./Container";
// মেম্বার সেকশনের ইমেজটিই এখানে ব্যবহার করা হলো
import member1 from "../assets/members/Jonayet_hossen.jpg";

export default function GalleryPart() {
  const galleryPhotos = [
    { id: 1, name: "Library Event 1", image: member1 },
    { id: 2, name: "Library Event 2", image: member1 },
    { id: 3, name: "Library Event 3", image: member1 },
    { id: 4, name: "Library Event 4", image: member1 },
    { id: 5, name: "Library Event 5", image: member1 },
    { id: 6, name: "Library Event 6", image: member1 },
    { id: 7, name: "Library Event 7", image: member1 },
    { id: 8, name: "Library Event 8", image: member1 },
  ];

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Title - Members Profile এর আইকন ও টেক্সট স্টাইল অনুযায়ী */}
        <div className="flex gap-2 text-3xl font-bold items-center justify-center text-primary-text mb-12">
          <RiGalleryFill className="text-hover-text" />
          <h2>Gallery</h2>
        </div>

        {/* Gallery Grid - Members Profile এর মতো গ্রিড সিস্টেম */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="card bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Section - মেম্বার সেকশনের ফিগার স্টাইল অনুযায়ী */}
              <figure className="px-3 pt-3 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.name}
                  className="w-full h-64 object-cover rounded-sm transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Card Body - মেম্বার সেকশনের টেক্সট ফরম্যাট অনুযায়ী */}
              <div className="card-body p-5">
                <h2 className="card-title text-primary-text text-lg font-bold">
                  {photo.name}
                </h2>
                <p className="text-gray-500 text-sm italic">Library Archive</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
