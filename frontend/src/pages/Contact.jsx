import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactInfo from '../components/sections/contact/ContactInfo';
import ContactTrust from '../components/sections/contact/ContactTrust';
import ContactForm from '../components/sections/contact/ContactForm';
import ContactProcess from '../components/sections/contact/ContactProcess';
import ContactMap from '../components/sections/contact/ContactMap';
import ContactFAQ from '../components/sections/contact/ContactFAQ';
import ContactFinalCTA from '../components/sections/contact/ContactFinalCTA';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | BoldVizByte - Let's Talk Growth</title>
                <meta name="description" content="Contact BoldVizByte for premium web development, digital marketing, and AI solutions. Based in Kovilpatti, serving India globally." />
            </Helmet>

            <ContactHero />

            <div className="container mx-auto px-6 pb-20 relative z-10 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Info + Validation */}
                    <div>
                        <ContactTrust />
                        <ContactInfo />
                    </div>

                    {/* Right Column: Dynamic Form */}
                    <div className="lg:sticky lg:top-32">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <ContactProcess />
            <ContactMap />
            <ContactFAQ />
            <ContactFinalCTA />
        </>
    );
};

export default Contact;
