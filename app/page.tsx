
import Creadibility from "./ui/components/Creadibility";
import HeroCards from "./ui/components/HeroCards";
import HomeSection from "./ui/components/HomeSection";


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-black/[0.96] ">
       <HomeSection/>
       <HeroCards/>
       <Creadibility/>
    </main>
  );
}
