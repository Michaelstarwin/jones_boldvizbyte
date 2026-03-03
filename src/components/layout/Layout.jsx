import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from '../ui/ChatBot';
import FloatingContactIcons from '../ui/FloatingContactIcons';

import CustomCursor from '../ui/CustomCursor';
import ScrollToTop from '../../utils/ScrollToTop';

const Layout = () => {
    return (
        <div className="bg-dark-bg min-h-screen relative font-outfit text-white selection:bg-neon-blue selection:text-black overflow-x-hidden">
            <CustomCursor />
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
