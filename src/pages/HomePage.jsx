import GalleryPart from "../components/Gallery";
import Hero from "../components/Hero/Hero";
import LibraryDetails from "../components/LibaryDetails";
import MembersFeedback from "../components/MembersFeedback";
import MembersProfiel from "../components/MembersProfile";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <LibraryDetails />
      <MembersProfiel />
      <MembersFeedback />
      <GalleryPart />
    </div>
  );
}
