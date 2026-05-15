import BestSellers from "../components/BestSeller";
import FeaturedBooks from "../components/FeaturedBooks";
import { NewArrivals } from "../components/NevArrival";

export default function CataloguePage() {
  return (
    <div>
      <FeaturedBooks />
      <NewArrivals />
      <BestSellers />
    </div>
  );
}
