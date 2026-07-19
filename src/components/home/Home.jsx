import Hero from "../sections/Hero";
import AboutUs from "./AboutUs";
import FeaturedMusic from "./FeaturedMusic";

export default function Home() {
    return (
        <main className="min-h-screen pt-20">
            <Hero />
            <AboutUs />
            <FeaturedMusic />
        </main>
    );
}