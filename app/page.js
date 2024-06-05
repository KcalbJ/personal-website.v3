import Header from "./header/header";
import ProjectCard from "./components/ProjectCard";
import { cards } from "./data/data";
export default function Home() {
  return (
    <div className=" text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex-col lg:flex-row flex gap-6 justify-between ">
      <Header/>

   
    <main className="lg:w-3/5 lg:py-24" >
      <section id="about"className="mt-24 ">
        <div className="text-wrap flex-col">
         <h2 className="text-2xl font-bold">ABOUT</h2>
          <div className="mt-4 text-slate-300">
            <p className="leading-8 text-lg text-left pt-2">
              Im a software developer from Hastings with a strong passion for
              creating impactful digital solutions.{" "}
            </p>
            <p className="leading-8 text-lg text-left pt-2">
              I fell in love with programming through automation and try to
              learn new things constantly.
            </p>
            <p className="leading-8 text-lg text-left pt-2">
              Outside of the terminal, I enjoy Brazilian Jiu-Jitsu
              and listening to podcasts.
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
