export default function Category({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {categories.map(cat => (
                <div
                    key={cat.categoryId}
                    onClick={() => onSelectCategory(cat.categoryId)}
                    className={`cursor-pointer rounded-lg overflow-hidden shadow-md transform transition-transform duration-300
            hover:scale-105 hover:shadow-xl
            ${cat.categoryId === selectedCategory ? "ring-4 ring-blue-400" : ""}
          `}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => { if(e.key === 'Enter') onSelectCategory(cat.categoryId) }}
                >
                    <img
                        src={cat.categoryImage}
                        alt={cat.categoryName}
                        className="w-full h-32 object-cover"
                    />
                    <div className="p-3 bg-white text-center font-semibold text-lg">
                        {cat.categoryName}
                    </div>
                </div>
            ))}
        </div>
    );
}
