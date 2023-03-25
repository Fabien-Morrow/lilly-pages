import Presentation from "../components/home/Presentation";
import Welcome from "../components/home/Welcome";
import TeasingMassages from "../components/home/TeasingMassages";
import Discover from "../components/home/Discover";
import Testimonials from "../components/home/Testimonials";
import ContactMe from "../components/home/ContactMe";

export default function Home() {
  return (
    <main>
      <Welcome />
      <div className="mx-5 mt-40 lg:mx-44">
        <Presentation />
        <hr className="border border-custom-green" />
        <TeasingMassages />
        <Discover />
        <Testimonials />
        <ContactMe />
      </div>
    </main>
  );
}
