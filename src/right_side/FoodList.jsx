export default function FoodList({ items, onSelectFood }) {
    if (!items.length) return <p>No food items found.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {items.map(item => (
                <div
                    key={item.id}
                    onClick={() => onSelectFood(item)}
                    className="cursor-pointer rounded-2xl overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-95 hover:shadow-xl"
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => { if(e.key === 'Enter') onSelectFood(item) }}
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-gray-600 mb-2">Rs.{item.price.toFixed(2)}</p>
                        {/*<p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>*/}
                    </div>
                </div>
            ))}
        </div>
    );
}
