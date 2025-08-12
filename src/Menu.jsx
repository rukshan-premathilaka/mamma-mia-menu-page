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

    const allFoods = foodMenu.flatMap(cat =>
        cat.items.map(item => ({ ...item, categoryName: cat.categoryName }))
    );

    const searchResults = searchTerm
        ? allFoods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];

    const displayedFoods = searchTerm ? searchResults : selectedCategory
        ? foodMenu.find(cat => cat.categoryId === selectedCategory)?.items || []
        : [];

    // This useEffect is now solely for listening to the browser's back button
    useEffect(() => {
        const onPopState = (event) => {
            if (event.state) {
                // If a state exists, update the component's state
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

        if (val.trim() === "") {
            setView("categories");
        } else {
            setView("foods");
        }
    };

    const handleCategoryClick = (catId) => {
        setSelectedCategory(catId);
        setSelectedFood(null);
        setSearchTerm("");
        setShowMenu(false);
        setView("foods");

        // Manually push a new history state when a new category is selected
        window.history.pushState({ view: "foods", selectedCategory: catId }, "");
    };

    const handleFoodClick = (food) => {
        setSelectedFood(food);
        setShowMenu(false);
        setView("details");

        // Manually push a new history state when a food item is selected
        window.history.pushState({ view: "details", selectedFood: food }, "");
    };

    const handleBackToFoods = () => {
        setSelectedFood(null);
        setView("foods");
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
        setView("categories");
    };

    const handleShowMenu = () => {
        setShowMenu(true);
        setSelectedCategory(null);
        setSelectedFood(null);
        setSearchTerm("");
        setView("restaurant");
    };

    return (
        <div className="w-full h-screen flex flex-col md:flex-row font-['Inter'] overflow-x-hidden">

            {/* Left Side - Fixed */}
            <div className="w-full md:w-1/2 h-full bg-red-500 flex items-center justify-center p-4">
                <Header />
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex flex-col">

                {/* Search bar + Menu button */}
                <div className="flex flex-col sm:flex-row items-center gap-3 p-4">
                    <input
                        type="text"
                        placeholder="Search food..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        disabled={showMenu}
                        className="
                          flex-grow
                          py-4
                          px-8
                          border
                          border-gray-300
                          rounded-full
                          shadow-sm
                          placeholder-gray-500
                          focus:outline-none
                          focus:ring-2
                          focus:ring-red-400
                          focus:border-red-600
                          w-full
                          sm:w-auto
                          md:w-1/2
                          lg:w-1/3
                          transition
                          duration-300
                        "
                    />
                    <button
                        onClick={handleShowMenu}
                        disabled={showMenu}
                        aria-label="Show restaurant menu"
                        className="
                          px-8
                          py-4
                          bg-gray-800
                          text-gray-200
                          font-bold
                          rounded-full
                          hover:bg-red-600
                          hover:text-white
                          transition-colors
                          duration-300
                          cursor-pointer
                          disabled:opacity-50
                          disabled:cursor-not-allowed
                          focus:outline-none
                          focus:ring-2
                          focus:ring-red-400
                        "
                    >
                        Contact Us
                    </button>
                </div>

                {/* Main content area */}
                <div className="flex-1 overflow-auto p-4">

                    {view === "categories" && !showMenu && (
                        <Category
                            categories={foodMenu}
                            selectedCategory={selectedCategory}
                            onSelectCategory={handleCategoryClick}
                        />
                    )}

                    {view === "foods" && !showMenu && (
                        <>
                            <button
                                onClick={handleBackToCategories}
                                className="mb-4 px-4 py-2 bg-gray-200 rounded-4xl hover:bg-gray-300 cursor-pointer"
                            >
                                ← Back to Categories
                            </button>

                            {displayedFoods.length === 0 ? (
                                <p>No food items found.</p>
                            ) : (
                                <FoodList
                                    items={displayedFoods}
                                    onSelectFood={handleFoodClick}
                                />
                            )}
                        </>
                    )}

                    {view === "details" && selectedFood && !showMenu && (
                        <>
                            <button
                                onClick={handleBackToFoods}
                                className="mb-4 px-4 py-2 bg-gray-200 rounded-4xl hover:bg-gray-300 cursor-pointer "
                            >
                                ← Back to {searchTerm ? "Search Results" : "Food Items"}
                            </button>

                            <FoodDetails food={selectedFood} />
                        </>
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