import Navbar from "../app/Components/Navbar";
import Banner from "../app/Components/Banner";
import Library from "./Components/Library";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15191c]">
      <Navbar></Navbar>
      <Banner></Banner>
      <Library></Library>
      <Footer></Footer>

     
    </main>
  );
}
