import { RiUserAddFill } from "react-icons/ri";
import Container from "../components/Container";
import { NavLink } from "react-router";

export default function RegistrationPage() {
  return (
    <section className="bg-gray-50 py-16 min-h-[80vh] text-primary-text flex items-center">
      <Container>
        {/* মেইন কার্ড - শ্যাডো এবং বর্ডার মেম্বার ফিডব্যাক সেকশনের মতো */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-sm shadow-md border border-gray-100">
          {/* হেডার পার্ট - আইকন স্টাইল মেম্বার্স প্রোফাইলের মতো */}
          <div className="flex flex-col items-center mb-10">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <RiUserAddFill className="text-4xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 text-sm mt-2">
              Join our library community today
            </p>
          </div>

          {/* রেজিস্ট্রেশন ফর্ম */}
          <form className="space-y-5">
            {/* ফার্স্ট এবং লাস্ট নেম - নিউ অ্যারাইভালস গ্রিডের মতো রেসপন্সিভ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label font-semibold text-sm text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jonayet"
                  className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold text-sm text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Hossen"
                  className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-semibold text-sm text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
              />
            </div>

            {/* বাটন স্টাইল - বেস্ট সেলার সেকশনের বাটনের মতো ক্লিন */}
            <div className="form-control mt-8">
              <button className="btn btn-primary text-white w-full rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
                Register Now
              </button>
            </div>

            {/* লগইন লিঙ্ক */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-primary font-bold cursor-pointer hover:underline"
              >
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
