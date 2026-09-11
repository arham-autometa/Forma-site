import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Featured from "@/components/Featured";
import Practice from "@/components/Practice";
import Close, { Colophon } from "@/components/Close";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Featured />
        <Practice />
        <Close />
      </main>
      <Colophon />
    </>
  );
}
