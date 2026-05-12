import { RiTeamFill } from "react-icons/ri";
import member1 from "../assets/members/Jonayet_hossen.jpg";
import Container from "./Container";

export default function MembersProfiel() {
  const members = [
    {
      id: 1,
      Name: "Jonayet Hossen",
      role: "MD",
      image: member1,
    },
    {
      id: 2,
      Name: "Ariful Islam",
      role: "CEO",
      image: member1,
    },
    {
      id: 3,
      Name: "Kayes Khan",
      role: "Manager",
      image: member1,
    },
    {
      id: 4,
      Name: "Mokarrom Nabil",
      role: "Jonior Manager",
      image: member1,
    },
  ];
  return (
    <section className="bg-white py-16">
      <Container>
        {/* title  */}
        <div className="flex gap-2 text-2xl font-bold items-center justify-center text-primary-text mb-10 ">
          <RiTeamFill />
          <h1>Members Profile</h1>
        </div>
        <div className="flex gap-6 text-white">
          {members.map((member) => (
            <div key={member.id} className="card bg-base-100 w-96 shadow-sm ">
              <figure>
                <img src={member.image} alt={member.Name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{member.Name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
