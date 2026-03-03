import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-9xl font-orbitron font-bold text-neon-blue mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
            <Link to="/" className="px-6 py-3 bg-neon-blue text-black font-bold rounded-none skew-x-[-10deg] hover:skew-x-[0deg] transition-transform">
                Go Home
            </Link>
        </div>
    );
};
export default NotFound;
