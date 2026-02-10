import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <p>Hello world</p>
      <Footer />
    </main>
  );
}
