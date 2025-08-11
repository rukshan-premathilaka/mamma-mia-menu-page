export default function FoodDetails({ food }) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={food.image}
                alt={food.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{food.name}</h2>
                <p className="text-gray-700 font-semibold mb-4">Rs.{food.price.toFixed(2)}</p>
                <p className="text-gray-600">{food.description}</p>
            </div>
        </div>
    );
}
