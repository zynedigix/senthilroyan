import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Metrics from '@/components/sections/Metrics';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Workflow from '@/components/sections/Workflow';
import Experience from '@/components/sections/Experience';
import Process from '@/components/sections/Process';
import Work from '@/components/sections/Work';
import Leadership from '@/components/sections/Leadership';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Metrics />
        <About />
        <Expertise />
        <Workflow />
        <Experience />
        <Process />
        <Work />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
