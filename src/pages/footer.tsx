
import { Mail, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-black text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                
                <div>
                    <h1 className="text-2xl font-bold">GDG Pune</h1>
                </div>
                
                
                <div>
                    <ul className="flex space-x-6">
                        <li className="hover:underline cursor-pointer">About GDG Program</li>
                        <li className="hover:underline cursor-pointer">About WTM Program</li>
                        <li className="hover:underline cursor-pointer">FAQ</li>
                        <li className="hover:underline cursor-pointer">Code of Conduct</li>
                        <li className="hover:underline cursor-pointer">Community Guidelines</li>
                    </ul>
                </div>

                {/* Social Media Icons Section */}
                <div className="flex space-x-6">
                    <a href="mailto:info@gdgpune.com" className="hover:text-gray-400" aria-label="Email">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Instagram">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Twitter">
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-6 text-sm text-gray-400">
                <p>&copy; 2025 GDG Pune. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
