import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import WhoWeAre from '../components/sections/WhoWeAre';
import ServicesPreview from '../components/sections/ServicesPreview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTA from '../components/sections/CTA';
import TechTicker from '../components/sections/TechTicker';
import ProcessPreview from '../components/sections/ProcessPreview';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import CareersPreview from '../components/sections/CareersPreview';
import ProblemSolution from '../components/sections/ProblemSolution';
import LocationPower from '../components/sections/LocationPower';
import ImpactStats from '../components/sections/ImpactStats';
import FAQ from '../components/sections/FAQ';
import FreeConsultation from '../components/sections/FreeConsultation';
import FinalCTA from '../components/sections/FinalCTA';
import EnquirySection from '../components/sections/EnquirySection';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>BoldVizByte | Premium Digital Agency & IT Solutions</title>
                <meta name="description" content="BoldVizByte is a futuristic Digital Marketing Agency and IT Company in Kovilpatti, Tamil Nadu. We build high-end 3D websites, AI solutions, and growth marketing." />
                <meta name="keywords" content="Digital Marketing Agency, IT Company, Web Design, Kovilpatti, Tamil Nadu, 3D Websites, AI Agents, Growth Marketing" />
            </Helmet>

            <Hero />
            <TechTicker />

            <ProblemSolution />
            <WhoWeAre />
            <ServicesPreview />

            <LocationPower />
            <ImpactStats />

            <ProcessPreview />
            <ProjectsPreview />
            <WhyChooseUs />

            <FAQ />
            <FreeConsultation />
            <CareersPreview />

            <FinalCTA />
            <EnquirySection />
        </>
    );
};

export default Home;
