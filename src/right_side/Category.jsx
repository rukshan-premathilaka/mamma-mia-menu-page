import { motion } from "framer-motion";

export default function Category({ categories, selectedCategory, onSelectCategory }) {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 pe-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {categories.map((cat) => (
                <div
                    key={cat.categoryId}
                    onClick={() => onSelectCategory(cat.categoryId)}
                    className={`cursor-pointer rounded-4xl overflow-hidden shadow-md transform transition-transform duration-300
                        hover:scale-95 hover:shadow-xl
                        ${cat.categoryId === selectedCategory ? "ring-4 ring-blue-400" : ""}
                    `}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") onSelectCategory(cat.categoryId);
                    }}
                >
                    <img
                        src={cat.categoryImage}
                        alt={cat.categoryName}
                        className="w-full h-50 object-cover"
                    />
                    <div className="p-6 bg-white text-center font-semibold text-xl ">
                        {cat.categoryName}
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
