export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="w-screen h-screen snap-start"></section>
      <section id="about" className="w-screen h-screen snap-start bg-gray-900"></section>
      <section id="works" className="w-screen h-screen snap-start bg-gray-800"></section>
      <section id="members" className="w-screen h-screen snap-start bg-gray-700"></section>
      <footer className="w-screen snap-start">
        Footer
      </footer>
    </div>
  );
}
