import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  );
}
