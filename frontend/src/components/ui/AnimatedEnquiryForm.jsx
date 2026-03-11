import { useEffect } from 'react';

const AnimatedEnquiryForm = () => {
    useEffect(() => {
        // Dynamically load the Visme script
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="w-full h-full min-h-[600px] flex justify-center items-center bg-dark-card/50 backdrop-blur-sm rounded-2xl relative shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 rounded-2xl pointer-events-none" />
            <div
                className="visme_d relative z-10 w-full"
                data-title="Webinar Registration Form"
                data-url="g7ddqxx0-untitled-project?fullPage=true"
                data-domain="forms"
                data-full-page="true"
                data-min-height="600px"
                data-form-id="133190"
                style={{ width: '100%', height: '100%', minHeight: '600px' }}
            ></div>
        </div>
    );
};

export default AnimatedEnquiryForm;
