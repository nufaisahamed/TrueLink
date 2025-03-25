import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-20 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} E-Tender Contractor Dashboard. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/privacy-policy" className="text-sm hover:text-gray-400">
                            Privacy Policy
                        </a>
                        <a href="/terms-of-service" className="text-sm hover:text-gray-400">
                            Terms of Service
                        </a>
                        <a href="/contact" className="text-sm hover:text-gray-400">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
