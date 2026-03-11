import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ServicesHero from '../components/sections/services/ServicesHero';
import ServicesOverview from '../components/sections/services/ServicesOverview';
import ServiceMatcher from '../components/sections/services/ServiceMatcher';
import ServicesCatalog from '../components/sections/services/ServicesCatalog';
import ServiceImpact from '../components/sections/services/ServiceImpact';
import ServiceLogistics from '../components/sections/services/ServiceLogistics';
import ServicesWhy from '../components/sections/services/ServicesWhy';
import ServicesProcess from '../components/sections/services/ServicesProcess';
import ServicePostDelivery from '../components/sections/services/ServicePostDelivery';
import ServicesIndustries from '../components/sections/services/ServicesIndustries';
import ServicesPricing from '../components/sections/services/ServicesPricing';
import ServicesFAQ from '../components/sections/services/ServicesFAQ';
import ServiceTech from '../components/sections/services/ServiceTech';
import ServicesLocation from '../components/sections/services/ServicesLocation';
import ServicesFinalCTA from '../components/sections/services/ServicesFinalCTA';
import StickyServiceCTA from '../components/sections/services/StickyServiceCTA';
import EnquirySection from '../components/sections/EnquirySection';
import Modal from '../components/ui/Modal';
import ServiceApplication from './forms/ServiceApplication';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.selectedService) {
            setSelectedService(location.state.selectedService);
            // Optional: clear state so it doesn't reopen on refresh, 
            // but we'll leave it simple for now or use history.replace to clear it
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleApply = (serviceTitle) => {
        setSelectedService(serviceTitle);
    };

    return (
        <>
            <Helmet>
                <title>Our Services | BoldVizByte - Digital Marketing & IT Solutions</title>
                <meta name="description" content="Explore our end-to-end digital services: Web Development, Agentic AI, Digital Marketing, and Branding designed to help you scale." />
            </Helmet>

            <ServicesHero />
            <ServicesOverview />
            <ServiceMatcher />
            <ServicesCatalog onApply={handleApply} />
            <ServiceImpact />
            <ServiceLogistics />
            <ServicesWhy />
            <ServicesProcess />
            <ServicePostDelivery />
            <ServicesIndustries />
            <ServicesPricing />
            <ServicesFAQ />
            <ServiceTech />
            <ServicesLocation />
            <ServicesFinalCTA />
            <EnquirySection />
            <StickyServiceCTA onApply={() => handleApply('')} />

            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={`Apply for ${selectedService || 'Service'}`}
            >
                <ServiceApplication
                    isModal={true}
                    onClose={() => setSelectedService(null)}
                    initialData={{ service: selectedService }}
                />
            </Modal>
        </>
    );
};

export default Services;
