import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/sections/about/AboutHero';
import AboutFounder from '../components/sections/about/AboutFounder';
import AboutStory from '../components/sections/about/AboutStory';
import AboutTimeline from '../components/sections/about/AboutTimeline';
import AboutIdentity from '../components/sections/about/AboutIdentity';
import AboutStandards from '../components/sections/about/AboutStandards';
import AboutApproach from '../components/sections/about/AboutApproach';
import AboutExpertise from '../components/sections/about/AboutExpertise';
import AboutTechStack from '../components/sections/about/AboutTechStack';
import AboutCulture from '../components/sections/about/AboutCulture';
import AboutFAQ from '../components/sections/about/AboutFAQ';
import AboutTrust from '../components/sections/about/AboutTrust';
import EnquirySection from '../components/sections/EnquirySection';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | BoldVizByte - Where Creativity Meets Technology</title>
                <meta name="description" content="BoldVizByte is a digital marketing and IT solutions company in Kovilpatti, Tamil Nadu. Bridging the gap between marketing and technology for measurable growth." />
            </Helmet>

            <AboutHero />
            <AboutFounder />
            <AboutStory />
            <AboutTimeline />
            <AboutIdentity />
            <AboutStandards />
            <AboutApproach />
            <AboutExpertise />
            <AboutTechStack />
            <AboutCulture />
            <AboutFAQ />
            <AboutTrust />
            <EnquirySection />
        </>
    );
};

export default About;
