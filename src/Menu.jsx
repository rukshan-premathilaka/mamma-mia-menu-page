import { useState, useEffect } from 'react';
import './App.css';
import Header from "./left_side/Header.jsx";
import foodMenu from './right_side/foodMenuData.js';
import Category from "./right_side/Category.jsx";
import FoodList from "./right_side/FoodList.jsx";
import FoodDetails from "./right_side/FoodDetails.jsx";
import RestaurantDetails from "./right_side/RestaurantDetails.jsx";

function Menu() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFood, setSelectedFood] = useState(null);
    const [view, setView] = useState("categories");
    const [showMenu, setShowMenu] = useState(false);
    const [isImagesLoaded, setIsImagesLoaded] = useState(false); // ✅ new state

    const allFoods = foodMenu.flatMap(cat =>
        cat.items.map(item => ({ ...item, categoryName: cat.categoryName }))
    );

    const searchResults = searchTerm
        ? allFoods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];

    const displayedFoods = searchTerm ? searchResults : selectedCategory
        ? foodMenu.find(cat => cat.categoryId === selectedCategory)?.items || []
        : [];

    // ✅ Preload all images before showing the app
    useEffect(() => {
        const imageUrls = [];

        foodMenu.forEach(cat => {
            if (cat.categoryImage) imageUrls.push(cat.categoryImage);
            cat.items.forEach(item => {
                if (item.image) imageUrls.push(item.image);
            });
        });

        let loadedCount = 0;
        imageUrls.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setIsImagesLoaded(true);
                }
            };
        });
    }, []);

    // ✅ Back button listener
    useEffect(() => {
        const onPopState = (event) => {
            if (event.state) {
                setView(event.state.view || "categories");
                setSelectedCategory(event.state.selectedCategory || null);
                setSelectedFood(event.state.selectedFood || null);
                setShowMenu(event.state.showMenu || false);
                setSearchTerm(event.state.searchTerm || "");
            }
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        setSelectedCategory(null);
        setSelectedFood(null);
        setShowMenu(false);

        setView(val.trim() === "" ? "categories" : "foods");
    };

    const handleCategoryClick = (catId) => {
        setSelectedCategory(catId);
        setSelectedFood(null);
        setSearchTerm("");
        setShowMenu(false);
        setView("foods");
        window.history.pushState({ view: "foods", selectedCategory: catId }, "");
    };

    const handleFoodClick = (food) => {
        setSelectedFood(food);
        setShowMenu(false);
        setView("details");
        window.history.pushState({ view: "details", selectedFood: food }, "");
    };

    const handleBackToFoods = () => {
        setSelectedFood(null);
        setView("foods");
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setView("categories");
        window.history.pushState({ view: "categories" }, "");
    };

    const handleShowMenu = () => {
        setShowMenu(true);
        setSelectedCategory(null);
        setSelectedFood(null);
        setSearchTerm("");
        setView("restaurant");
    };

    // ✅ Show loading screen until all images are ready
    if (!isImagesLoaded) {
        return (
            <div className="flex items-center justify-center h-screen w-full bg-white">
                <h2 className="text-xl font-bold">Loading Menu...</h2>
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex flex-col md:flex-row font-['Inter'] overflow-x-hidden">
            {/* Left Side */}
            <div className="w-full md:w-1/2 h-full bg-red-500 flex items-center justify-center p-4">
                <Header />
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col">
                {/* Search + Menu */}
                <div className="flex flex-col sm:flex-row items-center gap-3 px-4 pb-0 pt-4">
                    <input
                        type="text"
                        placeholder="Search food..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        disabled={showMenu}
                        className="flex-grow py-4 px-8 border border-gray-300 rounded-full shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-600 w-full sm:w-auto md:w-1/2 lg:w-1/3 transition duration-300"
                    />
                    <button
                        onClick={handleShowMenu}
                        disabled={showMenu}
                        className="px-8 py-4 bg-gray-800 text-gray-200 font-bold rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Back buttons */}
                <div className="p-4">
                    {view === "foods" && !showMenu && (
                        <button
                            onClick={handleBackToCategories}
                            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                        >
                            ← Back to Categories
                        </button>
                    )}
                    {view === "details" && selectedFood && !showMenu && (
                        <button
                            onClick={handleBackToFoods}
                            className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 cursor-pointer"
                        >
                            ← Back to {searchTerm ? "Search Results" : "Food Items"}
                        </button>
                    )}
                </div>

                {/* Main content */}
                <div className="flex-1 overflow-auto px-4 pb-4">
                    {view === "categories" && !showMenu && (
                        <Category
                            categories={foodMenu}
                            selectedCategory={selectedCategory}
                            onSelectCategory={handleCategoryClick}
                        />
                    )}
                    {view === "foods" && !showMenu && (
                        displayedFoods.length === 0 ? (
                            <p>No food items found.</p>
                        ) : (
                            <FoodList items={displayedFoods} onSelectFood={handleFoodClick} />
                        )
                    )}
                    {view === "details" && selectedFood && !showMenu && (
                        <FoodDetails food={selectedFood} />
                    )}
                    {view === "restaurant" && showMenu && (
                        <RestaurantDetails
                            onClose={() => {
                                setShowMenu(false);
                                setView("categories");
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Menu;
