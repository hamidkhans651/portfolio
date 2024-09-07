import LandingPage from "../app/LandingPage";
import FooterComp from './components/Footer/Footer'
import Skill from './components/Skill';
import { TimelineDemo } from "./acenity.UI/UI/TimelineDemo";
import Vignette from '../vignette/Vignette'



export default function Home() {
  return (
    <main>
      <div className="lg:block md:block hidden sm:hidden xs:hidden">
        < LandingPage />
      </div>
      <div>
        <TimelineDemo />
      </div>

      <div id='Projects'>
        <Skill />
      </div>

      <Vignette />
      <div id='Footer'>
        <FooterComp />
      </div>
    </main>
  );
};
