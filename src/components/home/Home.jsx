import Hero from "../sections/Hero";
import AboutUs from "./AboutUs";
import Events from "./Event";
import FeaturedMusic from "./FeaturedMusic";
import LiveExperience from "./LiveExperience";
import Products from "./Products";

export default function Home() {
    return (
        <main className="min-h-screen pt-20">
            <Hero />
            <Events/>
            {/* <AboutUs /> */}
            <Products />

            <FeaturedMusic />
            <LiveExperience />
        </main>
    );
}