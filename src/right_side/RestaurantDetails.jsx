import {FaFacebook, FaInstagram, FaTiktok, FaTimes} from 'react-icons/fa';

export default function RestaurantDetails({ onClose }) {
    return (
        <div className="max-w-md mx-auto h-a overflow-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col">
            {/* Close Button */}
            <button
                onClick={onClose}
                aria-label="Close menu"
                className="self-end p-2 rounded-full text-gray-600 hover:text-red-600 hover:bg-red-100 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                <FaTimes size={24} />
            </button>

            {/* Title */}
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight select-none">
                Mamma Mia Italian Restaurant
            </h2>

            {/* Info */}
            <section className="space-y-4 mb-10">
                <div>
                    <p className="text-gray-700 font-semibold">Address</p>
                    <p className="text-gray-500">No.98/A Hotel Road, Mount Lavinia</p>
                </div>

                <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <a
                        href="mailto:mammamiachinesedragonmammamia@gmail.com"
                        className="text-red-600 hover:underline break-words"
                    >
                        mammamiachinesedragonmammamia@gmail.com
                    </a>
                </div>

                <div>
                    <p className="text-gray-700 font-semibold">Contact Number</p>
                    <a href="tel:+94774511015" className="text-red-600 hover:underline">
                        +94 77 451 1015
                    </a>
                </div>
            </section>

            {/* Social */}
            <section className="mb-10">
                <p className="text-gray-700 font-semibold mb-4">Follow us on</p>
                <div className="flex space-x-6">
                    <a
                        href="https://www.instagram.com/mamma_mia_chinese_dragon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <FaInstagram size={32} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@m_miarestaurant"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <FaTiktok size={32} />
                    </a>
                    <a
                        href="https://web.facebook.com/profile.php?id=61578285705253"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <FaFacebook size={32} />
                    </a>
                </div><br/><br/>
                <p className="text-center italic text-gray-400 select-none text-sm leading-relaxed">
                    Rate and Review on Google.
                </p>
            </section>

            {/* Footer note */}
            <p className="text-center italic text-gray-400 select-none text-sm leading-relaxed">
                &copy; 2025 prime hospitality management services PVT LTD <br/>All rights reserved.
            </p>
        </div>
    );
}
