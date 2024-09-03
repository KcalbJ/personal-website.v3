import Header from "./header/header";
import ProjectCard from "./components/ProjectCard";
import { cards } from "./data/data";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex-col lg:flex-row flex gap-6 justify-between ">
      <Header/>

   
    <main className="lg:w-3/5 lg:py-24 " >
      <section id="about"className="mt-24 ">
        <div className="text-wrap flex-col">
         <h2 className="text-2xl font-bold">ABOUT</h2>
          <div className="mt-4 text-slate-300">
          <p className="leading-8 text-lg text-left pt-2">
          Im a passionate software developer with a keen interest in all things <Link href="/blog" className="underline text-white underline-offset-2 hover:text-lime-300">cybersecurity</Link>, dedicated to building innovative digital solutions that make a difference.</p>
<p className="leading-8 text-lg text-left pt-2">
  My journey into programming began with a fascination for automation, and ever since, Ive been on a continuous quest to expand my knowledge and skills.
</p>
<p className="leading-8 text-lg text-left pt-2">
  When Im not coding, you can find me on the mats practicing Brazilian Jiu-Jitsu.
</p>
          </div>
        </div>
      </section>
      <section id="projects"className="mt-24 card-wrapper">
        <div className="text-wrap flex-col gap-4 card-content">
        <h2 className="text-2xl font-bold">PROJECTS</h2>
        {cards.map((card) => {
            return (
              
                <ProjectCard key={card.id} card={card} />
             
            );
          })}
        </div>
      </section>

    </main>
    </div>
  );
}
