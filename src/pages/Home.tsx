import Hero from "../components/Hero";
import NewsAnnouncements from "../components/NewsAnnouncements";
import PioneeringResearch from "../components/PioneeringResearch";
import UpcomingEvents from "../components/UpcomingEvents";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsAnnouncements />
      <PioneeringResearch />
      <UpcomingEvents />
      <CTA />
    </>
  );
}
