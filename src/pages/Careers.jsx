import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import CareersHero from '../components/sections/careers/CareersHero';
import CareersWhy from '../components/sections/careers/CareersWhy';
import CareersClarity from '../components/sections/careers/CareersClarity';
import CareersPaths from '../components/sections/careers/CareersPaths';
import CareersRoles from '../components/sections/careers/CareersRoles';
import CareersProgramDetails from '../components/sections/careers/CareersProgramDetails';
// import CareersInternship from '../components/sections/careers/CareersInternship'; // Merged into ProgramDetails
import CareersWorkMode from '../components/sections/careers/CareersWorkMode';
import CareersExpectations from '../components/sections/careers/CareersExpectations';
import CareersCulture from '../components/sections/careers/CareersCulture';
import CareersStories from '../components/sections/careers/CareersStories';
import CareersProcess from '../components/sections/careers/CareersProcess';
import CareersTips from '../components/sections/careers/CareersTips';
import CareersFilter from '../components/sections/careers/CareersFilter'; // Kept as "Who Should Apply" recap
import CareersFAQ from '../components/sections/careers/CareersFAQ';
import CareersLocation from '../components/sections/careers/CareersLocation';
import CareersFinalCTA from '../components/sections/careers/CareersFinalCTA';
import EnquirySection from '../components/sections/EnquirySection';
import Modal from '../components/ui/Modal';
import JobApplication from './forms/JobApplication';
import InternshipApplication from './forms/InternshipApplication';

const Careers = () => {
    const [applyingRole, setApplyingRole] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.applyingRole) {
            setApplyingRole(location.state.applyingRole);
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleApply = (role) => {
        setApplyingRole(role);
    };

    return (
        <>
            <Helmet>
                <title>Careers | BoldVizByte - Build Your Future With Us</title>
                <meta name="description" content="Join BoldVizByte! Explore internships and jobs in Web Development, Design, Marketing, and more. Build your career with real-world impact." />
            </Helmet>

            <CareersHero />
            <CareersWhy />
            <CareersClarity />
            <CareersPaths />
            <CareersRoles onApply={handleApply} />
            <CareersProgramDetails />
            <CareersWorkMode />
            <CareersExpectations />
            <CareersCulture />
            <CareersStories />
            <CareersProcess />
            <CareersTips />
            <CareersFilter />
            <CareersFAQ />
            <CareersLocation />
            <CareersFinalCTA />
            <EnquirySection />

            <Modal
                isOpen={!!applyingRole}
                onClose={() => setApplyingRole(null)}
                title={`Apply for ${applyingRole?.title || 'Role'}`}
            >
                {applyingRole?.type === 'Internship' ? (
                    <InternshipApplication
                        isModal={true}
                        onClose={() => setApplyingRole(null)}
                        initialData={{ role: applyingRole.title }}
                    />
                ) : (
                    <JobApplication
                        isModal={true}
                        onClose={() => setApplyingRole(null)}
                        initialData={{ role: applyingRole?.title }}
                    />
                )}
            </Modal>
        </>
    );
};

export default Careers;
