import { Link } from "react-scroll";

export default function BackToTopButton({ to }) {
  return (
    <div className="text-center mt-10">
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="inline-block cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Back to Top
      </Link>
    </div>
  );
}
