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
            // fallback: copy link to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{food.name}</h2>
                    <p className="text-red-600 font-semibold text-lg mt-2 sm:mt-0">Rs. {food.price.toFixed(2)}</p>
                </div>
                <p className="text-gray-700 mb-6">{food.description}</p>

                <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                    aria-label={`Share details about ${food.name}`}
                    type="button"
                >
                    <FaShareAlt />
                    Share
                </button>
            </div>
        </div>
    );
}
