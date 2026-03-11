import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';
import FloatingContactIcons from '../ui/FloatingContactIcons';
import TargetCursor from '../ui/TargetCursor';
import ScrollToTop from '../../utils/ScrollToTop';

const Layout = () => {
    return (
        <div className="bg-dark-bg min-h-screen relative font-outfit text-white selection:bg-neon-blue selection:text-black overflow-x-hidden">
            <TargetCursor
                targetSelector="a, button, img, .glass-card, [role='button'], .cursor-target"
                spinDuration={1.3}
                hideDefaultCursor={false}
                parallaxOn={false}
                hoverDuration={0.1}
            />
            <ScrollToTop />
            <Navbar />
            <main className="relative z-10">
                <Outlet />
            </main>
            <ChatBot />
            <FloatingContactIcons />

            <Footer />
        </div>
    );
};

export default Layout;
