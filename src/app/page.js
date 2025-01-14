import Works from "./components/works";
import About from "./components/about";
import Members from "./components/members";

export default function Home() {
  return (
    <div id="sectionholder" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section id="cover" className="w-screen h-screen snap-start"></section>
      <section id="about" className="w-screen h-screen snap-start p-40"><About /></section>
      <section id="works" className="w-screen h-screen snap-start bg-gray-800 p-40"><Works /></section>
      <section id="members" className="w-screen h-screen snap-start bg-gray-700 p-40"><Members /></section>
      <footer className="w-screen snap-start">
        Footer
      </footer>
    </div>
  );
}
