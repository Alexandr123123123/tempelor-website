import { Hero } from '../../../widgets/marketing/Hero';
import { About } from '../../../widgets/about/About';

import { AboutFinal } from '../../../widgets/about/AboutFinal';
import { Services } from '../../../widgets/services/Services';
import { Features } from '../../../widgets/marketing/Features';
import { Process } from '../../../widgets/about/Process';
import { Projects } from '../../../widgets/projects/Projects';
import { Reviews } from '../../../widgets/marketing/Reviews';
import { Contact } from '../../../widgets/contact/Contact';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* <About /> */}

      <AboutFinal />
      <Services />
      <Features />
      <Process />
      <Projects />
      <Reviews />
      <Contact />
    </main>
  );
};
