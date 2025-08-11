import Image from '../assets/Category/fresh-vegetable-salad-with-grilled-chicken-breast.jpg';

const foodMenu = [
    {
        categoryId: 1,
        categoryName: "Salads",
        categoryImage: Image,
        items: [
            {
                id: 1,
                name: "Mamma Mia Special Salad",
                image: Image,
                price: 1000.00,
                description: "Special house salad with a mix of fresh ingredients."
            },
            {
                id: 2,
                name: "Chicken Salad",
                image: Image,
                price: 800.00,
                description: "Fresh salad with tender chicken pieces."
            },
            {
                id: 3,
                name: "Prawns Salad",
                image: Image,
                price: 900.00,
                description: "Salad featuring succulent prawns."
            },
            {
                id: 4,
                name: "Octopus Salad",
                image: Image,
                price: 1100.00,
                description: "Salad with octopus and fresh greens."
            },
            {
                id: 5,
                name: "Greek Salad",
                image: Image,
                price: 600.00,
                description: "Classic Greek salad with feta and olives."
            }
        ]
    },
    {
        categoryId: 2,
        categoryName: "Soups",
        categoryImage: Image,
        items: [
            {
                id: 6,
                name: "Vegetable Soup",
                image: Image,
                price: 650.00,
                description: "Hearty soup with fresh vegetables."
            },
            {
                id: 7,
                name: "Seafood Soup",
                image: Image,
                price: 850.00,
                description: "Rich soup with assorted seafood."
            },
            {
                id: 8,
                name: "Tomato Soup",
                image: Image,
                price: 650.00,
                description: "Creamy tomato soup with fresh herbs."
            },
            {
                id: 9,
                name: "Chicken Soup",
                image: Image,
                price: 850.00,
                description: "Comforting chicken soup with vegetables."
            },
            {
                id: 10,
                name: "Pumpkin Soup",
                image: Image,
                price: 550.00,
                description: "Smooth and creamy pumpkin soup."
            }
        ]
    },
    {
        categoryId: 3,
        categoryName: "Pasta",
        categoryImage: Image,
        items: [
            {
                id: 11,
                name: "Mamma Mia Special Sea Food Pasta",
                image: Image,
                price: 2450.00,
                description: "Seer fish, cuttlefish, prawns, feta cheese, tomato sauce, olive, cuppari."
            },
            {
                id: 12,
                name: "Pasta Tomato",
                image: Image,
                price: 1350.00,
                description: "Tomato paste, parmesan cheese, olive, basilico."
            },
            {
                id: 13,
                name: "Pasta Tonno Capperi Olive",
                image: Image,
                price: 1850.00,
                description: "Tonno, feta cheese, olive, cuppari."
            },
            {
                id: 14,
                name: "Pasta Carbonara",
                image: Image,
                price: 2400.00,
                description: "Beef, egg, parmigiano, olive oil."
            },
            {
                id: 15,
                name: "Pasta Octopus",
                image: Image,
                price: 2200.00,
                description: "Octopus, feta cheese, tomato sauce, olive, cuppari, coriander seeds."
            },
            {
                id: 16,
                name: "Pasta Prawns With Basilico",
                image: Image,
                price: 2000.00,
                description: "Prawns, basilico, parmesan, zucchini, garlic, olive oil."
            },
            {
                id: 17,
                name: "Pasta Bolognese",
                image: Image,
                price: 1950.00,
                description: "Beef, tomato sauce, parmigiano."
            }
        ]
    },
    {
        categoryId: 4,
        categoryName: "Lasagna",
        categoryImage: Image,
        items: [
            {
                id: 18,
                name: "Parmigiana di Melanzane",
                image: Image,
                price: 1400.00,
                description: "Tomato sauce, basilico, parmesan cheese, brinjals."
            },
            {
                id: 19,
                name: "Lasagna",
                image: Image,
                price: 2600.00,
                description: "Beef, tomato sauce, red wine."
            }
        ]
    },
    {
        categoryId: 5,
        categoryName: "Pizza",
        categoryImage: Image,
        items: [
            {
                id: 20,
                name: "Margarita Pizza 10\"",
                image: Image,
                price: 2300.00,
                description: "Tomato paste, mozzarella cheese, ramzan cheese, olive oil, basilico."
            },
            {
                id: 21,
                name: "Pizza Bianca 10\"",
                image: Image,
                price: 1400.00,
                description: "Rosemary leaves."
            },
            {
                id: 22,
                name: "Vegetable Pizza 10\"",
                image: Image,
                price: 1950.00,
                description: "Tomato paste, mozzarella cheese, mushroom, bell pepper, red cabbage, onion, olive."
            },
            {
                id: 23,
                name: "Chicken Pizza 10\"",
                image: Image,
                price: 2250.00,
                description: "Tomato paste, mozzarella cheese, smoke chicken, white sauce, ramzan cheese, onion."
            },
            {
                id: 24,
                name: "Double Cheese Pizza Seafood 10\"",
                image: Image,
                price: 2900.00,
                description: "Tomato paste, mozzarella cheese, seafood, ramzan cheese."
            },
            {
                id: 25,
                name: "Masaluna Pizza 10\"",
                image: Image,
                price: 1950.00,
                description: "Tomato paste, mozzarella cheese, potato paste Indian style."
            },
            {
                id: 26,
                name: "Bocconcini Pizza 10\"",
                image: Image,
                price: 2900.00,
                description: "Tomato paste, mozzarella cheese, ramzan cheese, ham & bacon."
            }
        ]
    },
    {
        categoryId: 6,
        categoryName: "Rice",
        categoryImage: Image,
        items: [
            {
                id: 27,
                name: "Cuttlefish With Basilico Rice",
                image: Image,
                price: 1950.00,
                description: "Rice, basilico, cuttlefish, olive, cuppari, parmigiana, zucchini."
            },
            {
                id: 28,
                name: "Risotto Alla Milanese",
                image: Image,
                price: 1350.00,
                description: "Saffron risotto with rice, butter, parmesan cheese."
            },
            {
                id: 29,
                name: "Seafood Rice",
                image: Image,
                price: 2100.00,
                description: "Seer fish, cuttlefish, prawns, rice, olive, cuppari."
            }
        ]
    },
    {
        categoryId: 7,
        categoryName: "Sandwiches",
        categoryImage: Image,
        items: [
            {
                id: 30,
                name: "Mamma Mia Special Sandwich",
                image: Image,
                price: 1900.00,
                description: "Special house sandwich with premium ingredients."
            },
            {
                id: 31,
                name: "Ham & Cheese Sandwich",
                image: Image,
                price: 900.00,
                description: "Classic ham and cheese sandwich."
            },
            {
                id: 32,
                name: "Vegetable Sandwich",
                image: Image,
                price: 600.00,
                description: "Fresh vegetable sandwich with greens."
            },
            {
                id: 33,
                name: "Nutella With Bread Sandwich",
                image: Image,
                price: 600.00,
                description: "Sweet Nutella spread on bread."
            },
            {
                id: 34,
                name: "Egg Sandwich",
                image: Image,
                price: 650.00,
                description: "Simple egg sandwich with fresh ingredients."
            }
        ]
    },
    {
        categoryId: 8,
        categoryName: "Burgers",
        categoryImage: Image,
        items: [
            {
                id: 35,
                name: "Crispy Chicken Burger",
                image: Image,
                price: 1150.00,
                description: "Crispy chicken patty with lettuce and sauce."
            },
            {
                id: 36,
                name: "Beef Burger",
                image: Image,
                price: 1350.00,
                description: "Juicy beef patty with classic toppings."
            },
            {
                id: 37,
                name: "Chicken Hamburger",
                image: Image,
                price: 950.00,
                description: "Chicken patty with fresh vegetables."
            },
            {
                id: 38,
                name: "Cheese Burger",
                image: Image,
                price: 65.00,
                description: "Simple burger with melted cheese."
            }
        ]
    },
    {
        categoryId: 9,
        categoryName: "Submarines",
        categoryImage: Image,
        items: [
            {
                id: 39,
                name: "Chicken Submarine",
                image: Image,
                price: 1550.00,
                description: "Chicken submarine sandwich with fresh toppings."
            },
            {
                id: 40,
                name: "Beef Submarine",
                image: Image,
                price: 1600.00,
                description: "Beef submarine with French fries."
            }
        ]
    },
    {
        categoryId: 10,
        categoryName: "Grill",
        categoryImage: Image,
        items: [
            {
                id: 41,
                name: "Grilled Chicken",
                image: Image,
                price: 2700.00,
                description: "Tender grilled chicken with spices."
            },
            {
                id: 42,
                name: "Grilled Beef",
                image: Image,
                price: 3350.00,
                description: "Juicy grilled beef with seasonings."
            },
            {
                id: 43,
                name: "Mix Grilled",
                image: Image,
                price: 4550.00,
                description: "Beef, chicken, seer fish, cuttlefish, prawns."
            }
        ]
    },
    {
        categoryId: 11,
        categoryName: "Fish Grill",
        categoryImage: Image,
        items: [
            {
                id: 44,
                name: "Seer Fish Grilled",
                image: Image,
                price: 2200.00,
                description: "Grilled seer fish with seasonings."
            },
            {
                id: 45,
                name: "Fried Cuttlefish",
                image: Image,
                price: 1950.00,
                description: "Crispy fried cuttlefish."
            },
            {
                id: 46,
                name: "Jumbo Prawns Grilled",
                image: Image,
                price: 3300.00,
                description: "Grilled jumbo prawns with spices."
            },
            {
                id: 47,
                name: "Grilled Full Fish (450g)",
                image: Image,
                price: 3200.00,
                description: "Whole grilled fish, 450g."
            }
        ]
    },
    {
        categoryId: 12,
        categoryName: "Hot Drinks",
        categoryImage: Image,
        items: [
            {
                id: 48,
                name: "Cafe Espresso Italiano",
                image: Image,
                price: 450.00,
                description: "Authentic Italian espresso."
            },
            {
                id: 49,
                name: "Cappuccino",
                image: Image,
                price: 550.00,
                description: "Classic cappuccino with frothy milk."
            },
            {
                id: 50,
                name: "Hot Chocolate",
                image: Image,
                price: 650.00,
                description: "Rich and creamy hot chocolate."
            },
            {
                id: 51,
                name: "Green Tea",
                image: Image,
                price: 225.00,
                description: "Refreshing green tea."
            },
            {
                id: 52,
                name: "Lime Tea",
                image: Image,
                price: 220.00,
                description: "Zesty lime-infused tea."
            },
            {
                id: 53,
                name: "Milk Tea",
                image: Image,
                price: 225.00,
                description: "Traditional milk tea."
            },
            {
                id: 54,
                name: "Sri Lankan Coffee",
                image: Image,
                price: 200.00,
                description: "Locally sourced Sri Lankan coffee."
            }
        ]
    },
    {
        categoryId: 13,
        categoryName: "Beverages",
        categoryImage: Image,
        items: [
            {
                id: 55,
                name: "Orange Juice",
                image: Image,
                price: 650.00,
                description: "Freshly squeezed orange juice."
            },
            {
                id: 56,
                name: "Lemon Juice",
                image: Image,
                price: 350.00,
                description: "Tangy lemon juice."
            },
            {
                id: 57,
                name: "Mango Juice",
                image: Image,
                price: 500.00,
                description: "Sweet mango juice."
            },
            {
                id: 58,
                name: "Avocado Juice",
                image: Image,
                price: 550.00,
                description: "Creamy avocado juice."
            },
            {
                id: 59,
                name: "Pineapple Juice",
                image: Image,
                price: 450.00,
                description: "Refreshing pineapple juice."
            },
            {
                id: 60,
                name: "Wood Apple Juice",
                image: Image,
                price: 450.00,
                description: "Unique wood apple juice."
            },
            {
                id: 61,
                name: "Ice Coffee",
                image: Image,
                price: 450.00,
                description: "Chilled coffee drink."
            },
            {
                id: 62,
                name: "Coca-Cola, Fanta, Sprite, Pepsi",
                image: Image,
                price: 180.00,
                description: "Choice of soft drinks."
            },
            {
                id: 63,
                name: "Water Bottle 1L",
                image: Image,
                price: 180.00,
                description: "1-liter bottled water."
            },
            {
                id: 64,
                name: "Water Bottle 500ml",
                image: Image,
                price: 80.00,
                description: "500ml bottled water."
            }
        ]
    },
    {
        categoryId: 14,
        categoryName: "Ice Cream",
        categoryImage: Image,
        items: [
            {
                id: 65,
                name: "Vanilla Ice Cream",
                image: Image,
                price: 500.00,
                description: "Classic vanilla ice cream."
            },
            {
                id: 66,
                name: "Chocolate Ice Cream",
                image: Image,
                price: 500.00,
                description: "Rich chocolate ice cream."
            },
            {
                id: 67,
                name: "Nuts Ice Cream",
                image: Image,
                price: 550.00,
                description: "Ice cream with crunchy nuts."
            },
            {
                id: 68,
                name: "Strawberry Ice Cream",
                image: Image,
                price: 600.00,
                description: "Sweet strawberry ice cream."
            },
            {
                id: 69,
                name: "Fruit Salad with Ice Cream",
                image: Image,
                price: 650.00,
                description: "Fresh fruit salad with ice cream."
            }
        ]
    }
];

export default foodMenu;