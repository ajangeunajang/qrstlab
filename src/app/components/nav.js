import Link from "next/link";

export default function Nav() {
  return (
    <ul className="flex gap-4 justify-center fixed top-10 left-0 right-0">
      <li><a href="#about" className="hover:text-gray-400 mx-4">About</a></li>
      <li><a href="#works" className="hover:text-gray-400 mx-4">Works</a></li>
      <li><a href="#members" className="hover:text-gray-400 mx-4">Members</a></li>
      <li><Link href="https://www.instagram.com/q.shim/" className="hover:text-gray-400 mx-4">News</Link></li>
    </ul>
  );
}