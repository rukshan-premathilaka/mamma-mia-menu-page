import { FaShareAlt } from 'react-icons/fa';

export default function FoodDetails({ food }) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: food.name,
                text: food.description,
                url: window.location.href,
            }).catch((error) => {
                alert("Sharing failed:", error);
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-96 object-cover"
            />
            <div className="p-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 border-b border-gray-300 pb-6">
                    <h2 className="text-4xl font-extrabold text-gray-900">{food.name}</h2>
                    <p className="text-red-600 font-bold text-3xl mt-4 sm:mt-0">Rs. {food.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-800 text-lg mb-10 leading-relaxed">{food.description}</p>

                <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-400 transition"
                    aria-label={`Share details about ${food.name}`}
                    type="button"
                >
                    <FaShareAlt size={24} />
                    <span className="text-xl font-semibold">Share</span>
                </button>
            </div>
        </div>
    );
}
