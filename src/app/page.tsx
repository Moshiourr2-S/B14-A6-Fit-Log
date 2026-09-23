import Navbar from "../app/Components/Navbar";
import Banner from "../app/Components/Banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15191c]">
      <Navbar />
      <Banner />

      <section id="library" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase text-white"></h2>
        </div>
      </section>
    </main>
  );
}
