import Hero from "../sections/Hero";
import AboutUs from "./AboutUs";

export default function Home() {
    return (
        <main className="min-h-screen pt-20">
            <Hero/>
            <AboutUs></AboutUs>
        </main>
    );
}