import Container from "./Container";
import { HiOutlineLibrary } from "react-icons/hi";

export default function LibraryDetails() {
  return (
    <section className="bg-gray-100 py-16 text-primary-text">
      <Container>
        {/* section header  */}
        <div className="items-center justify-center flex flex-col mb-4">
          <div className="flex gap-2 text-2xl font-bold items-center ">
            <HiOutlineLibrary />
            <h1> Library Details</h1>
          </div>
          <h2 className="text-base mb-10">
            Bridging tradition with digital innovation.
          </h2>
        </div>

        <div className="flex gap-10 justify-between  ">
          <div className="w-[45%]">
            <h1 className="font-bold text-lg mb-2">About The Library</h1>
            <p className="text-base">
              Library details encompass their core function (providing organized
              access to info/media), physical/digital resources (books,
              databases, computers, 3D printers), services (research help,
              events, workshops), and specific logistics like hours/location
              (e.g., British Council Dhaka: Sat-Thu 10-6, Fri 3-7), with
              functions evolving from mere book storage to community learning
              hubs.
            </p>
          </div>
          <div className="w-[45%]">
            <h1 className="font-bold text-lg mb-2">
              Library Resources & Facilities
            </h1>
            <div className="text-base">
              <h2>
                <span className="font-bold">Collections:</span> Books, journals,
                newspapers, films, music, digital databases, sometimes unique
                items like games or tech.
              </h2>
              <h2>
                <span className="font-bold">Access:</span> Physical lending,
                reference sections, digital access via portals/apps, A-Z
                databases. Technology: Computers, Wi-Fi, printers, scanners, 3D
                printers (makerspaces).
              </h2>
              <h2>
                <span className="font-bold">Services: </span>Research help (chat
                with librarian), workshops (research skills), events, community
                programs, workforce support.
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
