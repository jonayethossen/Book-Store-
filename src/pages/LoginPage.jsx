import { RiLoginBoxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom"; // NavLink ইমপোর্ট নিশ্চিত করুন
import Container from "../components/Container";

export default function LoginPage() {
  return (
    <section className="bg-gray-50 py-16 min-h-[80vh] text-primary-text flex items-center">
      <Container>
        {/* মেইন কার্ড - শ্যাডো এবং বর্ডার রেজিস্ট্রেশন পেজের মতো */}
        <div className="max-w-md mx-auto bg-white p-10 rounded-sm shadow-md border border-gray-100">
          {/* হেডার পার্ট - আইকন স্টাইল মেম্বার্স প্রোফাইলের মতো */}
          <div className="flex flex-col items-center mb-10">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <RiLoginBoxFill className="text-4xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-2">
              Please enter your details to login
            </p>
          </div>

          {/* লগইন ফর্ম */}
          <form className="space-y-6">
            <div className="form-control">
              <label className="label font-semibold text-sm text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="nabil@example.com"
                className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
                required
              />
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label font-semibold text-sm text-gray-700 p-0">
                  Password
                </label>
                <span className="text-xs text-primary cursor-pointer hover:underline font-medium">
                  Forgot Password?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered focus:outline-primary rounded-sm bg-gray-50 w-full"
                required
              />
            </div>

            {/* রিমেম্বার মি চেকবক্স */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-xs rounded-sm"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            {/* সাবমিট বাটন - এখানে NavLink এর বদলে বাটন ব্যবহার করা হয়েছে */}
            <div className="form-control mt-8">
              <button
                type="submit"
                className="btn btn-primary text-white w-full rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                Login
              </button>
            </div>

            {/* রেজিস্ট্রেশন লিঙ্ক - NavLink ব্যবহার করে */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <NavLink
                to="/registration"
                className="text-primary font-bold cursor-pointer hover:underline"
              >
                Register
              </NavLink>
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
