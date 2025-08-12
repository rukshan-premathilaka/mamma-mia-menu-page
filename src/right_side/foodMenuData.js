import Image from '../assets/Category/fresh-vegetable-salad-with-grilled-chicken-breast.jpg';

/* Salad */
import SaladCover from '../assets/menu/salad/cover.jpg';
import MammaMiaSpecialSalad from '../assets/menu/salad/Mamma_Mia_special_sald.jpg';
import ChickenSalad from '../assets/menu/salad/chicken_salad.jpg';
import PrawnsSalad from '../assets/menu/salad/prawns_Salad.jpg';
import OctopusSalad from '../assets/menu/salad/octopus_salad.jpg';
import GreekSalad from '../assets/menu/salad/greek_salad.jpg';

/* Soup */
import VegetableSoup from '../assets/menu/soups/vegitable_soups.jpg';
import SeafoodSoup from '../assets/menu/soups/seafoods_soups.jpg';
import TomatoSoup from '../assets/menu/soups/tomoto_soups.jpg';
import ChickenSoup from '../assets/menu/soups/chicken_soups.jpg';
import PumpkinSoup from '../assets/menu/soups/pumpkin_soups.jpg';

/* Pasta */
import MammaMiaSpecialSeaFoodPasta from '../assets/menu/pasta/mamma_mia_speacial_sea_food_pasta .jpg';
import PastaTomato from '../assets/menu/pasta/tomoto_pasta.jpg';
import PastaTonnoCapperiOlive from '../assets/menu/pasta/Pasta_Tonno_Capperi_Olive.jpg';
import PastaCarbonara from '../assets/menu/pasta/Pasta_Carbonara.jpg';
import PastaOctopus from '../assets/menu/pasta/octopus_pasta.jpg';
import PastaPrawnsWithBasilico from '../assets/menu/pasta/Pasta_Prawns_With_Basilico.jpg';
import PastaBolognese from '../assets/menu/pasta/Pasta_Bolognese.jpg';


/* Lasagna */
import Lasagna from '../assets/menu/lasagna/_Lasagna.jpg';
import ParmigianadiMelanzane from '../assets/menu/lasagna/Parmigiana_di_Melanzane.jpg';

/* Pizza */
import MargaritaPizza10 from '../assets/menu/Pizza/Margarita_Pizza_10.jpg';
import PizzaBianca10  from '../assets/menu/Pizza/Pizza_Bianca_10.jpg';
import VegetablePizza10 from '../assets/menu/Pizza/Vegetable_Pizza_10.jpg';
import ChickenPizza10 from '../assets/menu/Pizza/Chicken_Pizza_10.jpg';
import MasalunaPizza10 from '../assets/menu/Pizza/Masaluna_Pizza_10.jpg';
import BocconciniPizza10 from '../assets/menu/Pizza/Bocconcini_Pizza_10.jpg';
import DoubleCheesePizzaSeafood10 from '../assets/menu/Pizza/Double_Cheese_Pizza_Seafood 10.jpg';


/* Rice */
import CuttlefishWithBasilicoRice from '../assets/menu/rice/Cuttlefish_With_Basilico_Rice.jpg';
import RisottoAllaMilanese from '../assets/menu/rice/Risotto_Alla_Milanese.jpg';
import SeafoodRice from '../assets/menu/rice/sea_food_rice.jpg';

/* Sandwich */
import MammaMiaSpecialSandwich from '../assets/menu/sanwich/Mamma_Mia_Special_Sandwich.jpg';
import HamAndCheeseSandwich from '../assets/menu/sanwich/Ham_&_Cheese_Sandwich.jpg';
import VegetableSandwich from '../assets/menu/sanwich/Vegetable_Sandwich.jpg';
import NutellaWithBreadSandwich from '../assets/menu/sanwich/Nutella_With_Bread_Sandwich.jpg';
import EggSandwich from '../assets/menu/sanwich/Egg_Sandwich.jpg';

/* Burger */
import CrispyChickenBurger from '../assets/menu/burger/Crispy_Chicken_Burger_.jpg';
import BeefBurger from '../assets/menu/burger/Beef_Burger.jpg';
import ChickenHamburger from '../assets/menu/burger/Chicken_Hamburger.jpg';
import CheeseBurger from '../assets/menu/burger/Cheese_Burger.jpg';

/* Submarine */
import ChickenSubmarine from '../assets/menu/Submarines/Chicken_Submarine.jpg';
import BeefSubmarine from '../assets/menu/Submarines/Beef_Submarine.jpg';

/* Grill */
import GrillCover from '../assets/menu/Grill/cover.jpg';
import GrilledChicken from '../assets/menu/Grill/Grilled_Chicken.jpg';
import GrilledBeef from '../assets/menu/Grill/Grilled_Beef.jpg';
import MixGrilled from '../assets/menu/Grill/Mix_Grilled.jpg';

/* Fish Grill */
import FishGrillCover from '../assets/menu/Fish_Grill/cover.jpg';
import FriedCuttlefish from '../assets/menu/Fish_Grill/Fried_Cuttlefish.jpg';
import SeerFishGrilled from '../assets/menu/Fish_Grill/Seer_Fish_Grilled.jpg';
import JumboPrawnsGrilled from '../assets/menu/Fish_Grill/Jumbo_Prawns_Grilled.jpg';
import GrilledFullFish450g from '../assets/menu/Fish_Grill/Grilled_Full_Fish_(450g).jpg';

/* Hot Drinks */
import CafeEspressoItaliano from '../assets/menu/Hot_Drinks/Cafe_Espresso_Italiano.jpg';
import Cappuccino from '../assets/menu/Hot_Drinks/Cappuccino.jpg';
import HotChocolate from '../assets/menu/Hot_Drinks/Hot_Chocolate.jpg';
import GreenTea from '../assets/menu/Hot_Drinks/Green_Tea.jpg';
import LimeTea from '../assets/menu/Hot_Drinks/Lime_Tea.jpg';
import MilkTea from '../assets/menu/Hot_Drinks/Milk_Tea.jpg';
import SriLankanCoffee from '../assets/menu/Hot_Drinks/Sri_Lankan_Coffee.jpg';

/* Beverages */

/* Ice Cream */
import ChocolateIceCream from '../assets/menu/Ice Cream/Chocolate_Ice_Cream.jpg';
import VanillaIceCream from '../assets/menu/Ice Cream/Vanilla_Ice_Cream.jpg';
import NutsIceCream from '../assets/menu/Ice Cream/Nuts_Ice_Cream.jpg';
import StrawberryIceCream from '../assets/menu/Ice Cream/Strawberry_Ice_Cream.jpg';
import FruitSaladIceCream from '../assets/menu/Ice Cream/Fruit_Salad_with_Ice_Cream.jpg';



const foodMenu = [
    {
        categoryId: 1,
        categoryName: "Salads",
        categoryImage: SaladCover,
        items: [
            {
                id: 1,
                name: "Mamma Mia Special Salad",
                image: MammaMiaSpecialSalad,
                price: 1000.00,
                description: "Special house salad with a mix of fresh ingredients."
            },
            {
                id: 2,
                name: "Chicken Salad",
                image: ChickenSalad,
                price: 800.00,
                description: "Fresh salad with tender chicken pieces."
            },
            {
                id: 3,
                name: "Prawns Salad",
                image: PrawnsSalad,
                price: 900.00,
                description: "Salad featuring succulent prawns."
            },
            {
                id: 4,
                name: "Octopus Salad",
                image: OctopusSalad,
                price: 1100.00,
                description: "Salad with octopus and fresh greens."
            },
            {
                id: 5,
                name: "Greek Salad",
                image: GreekSalad,
                price: 600.00,
                description: "Classic Greek salad with feta and olives."
            }
        ]
    },
    {
        categoryId: 2,
        categoryName: "Soups",
        categoryImage: SeafoodSoup,
        items: [
            {
                id: 6,
                name: "Vegetable Soup",
                image: VegetableSoup,
                price: 650.00,
                description: "Hearty soup with fresh vegetables."
            },
            {
                id: 7,
                name: "Seafood Soup",
                image: SeafoodSoup,
                price: 850.00,
                description: "Rich soup with assorted seafood."
            },
            {
                id: 8,
                name: "Tomato Soup",
                image: TomatoSoup,
                price: 650.00,
                description: "Creamy tomato soup with fresh herbs."
            },
            {
                id: 9,
                name: "Chicken Soup",
                image: ChickenSoup,
                price: 850.00,
                description: "Comforting chicken soup with vegetables."
            },
            {
                id: 10,
                name: "Pumpkin Soup",
                image: PumpkinSoup,
                price: 550.00,
                description: "Smooth and creamy pumpkin soup."
            }
        ]
    },
    {
        categoryId: 3,
        categoryName: "Pasta",
        categoryImage: PastaTomato,
        items: [
            {
                id: 11,
                name: "Mamma Mia Special Sea Food Pasta",
                image: MammaMiaSpecialSeaFoodPasta,
                price: 2450.00,
                description: "Seer fish, cuttlefish, prawns, feta cheese, tomato sauce, olive, cuppari."
            },
            {
                id: 12,
                name: "Pasta Tomato",
                image: PastaTomato,
                price: 1350.00,
                description: "Tomato paste, parmesan cheese, olive, basilico."
            },
            {
                id: 13,
                name: "Pasta Tonno Capperi Olive",
                image: PastaTonnoCapperiOlive,
                price: 1850.00,
                description: "Tonno, feta cheese, olive, cuppari."
            },
            {
                id: 14,
                name: "Pasta Carbonara",
                image: PastaCarbonara,
                price: 2400.00,
                description: "Beef, egg, parmigiano, olive oil."
            },
            {
                id: 15,
                name: "Pasta Octopus",
                image: PastaOctopus,
                price: 2200.00,
                description: "Octopus, feta cheese, tomato sauce, olive, cuppari, coriander seeds."
            },
            {
                id: 16,
                name: "Pasta Prawns With Basilico",
                image: PastaPrawnsWithBasilico,
                price: 2000.00,
                description: "Prawns, basilico, parmesan, zucchini, garlic, olive oil."
            },
            {
                id: 17,
                name: "Pasta Bolognese",
                image: PastaBolognese,
                price: 1950.00,
                description: "Beef, tomato sauce, parmigiano."
            }
        ]
    },
    {
        categoryId: 4,
        categoryName: "Lasagna",
        categoryImage: Lasagna,
        items: [
            {
                id: 18,
                name: "Parmigiana di Melanzane",
                image: ParmigianadiMelanzane,
                price: 1400.00,
                description: "Tomato sauce, basilico, parmesan cheese, brinjals."
            },
            {
                id: 19,
                name: "Lasagna",
                image: Lasagna,
                price: 2600.00,
                description: "Beef, tomato sauce, red wine."
            }
        ]
    },
    {
        categoryId: 5,
        categoryName: "Pizza",
        categoryImage: MasalunaPizza10,
        items: [
            {
                id: 20,
                name: "Margarita Pizza 10\"",
                image: MargaritaPizza10,
                price: 2300.00,
                description: "Tomato paste, mozzarella cheese, ramzan cheese, olive oil, basilico."
            },
            {
                id: 21,
                name: "Pizza Bianca 10\"",
                image: PizzaBianca10,
                price: 1400.00,
                description: "Rosemary leaves."
            },
            {
                id: 22,
                name: "Vegetable Pizza 10\"",
                image: VegetablePizza10,
                price: 1950.00,
                description: "Tomato paste, mozzarella cheese, mushroom, bell pepper, red cabbage, onion, olive."
            },
            {
                id: 23,
                name: "Chicken Pizza 10\"",
                image: ChickenPizza10,
                price: 2250.00,
                description: "Tomato paste, mozzarella cheese, smoke chicken, white sauce, ramzan cheese, onion."
            },
            {
                id: 24,
                name: "Double Cheese Pizza Seafood 10\"",
                image: DoubleCheesePizzaSeafood10,
                price: 2900.00,
                description: "Tomato paste, mozzarella cheese, seafood, ramzan cheese."
            },
            {
                id: 25,
                name: "Masaluna Pizza 10\"",
                image: MasalunaPizza10,
                price: 1950.00,
                description: "Tomato paste, mozzarella cheese, potato paste Indian style."
            },
            {
                id: 26,
                name: "Bocconcini Pizza 10\"",
                image: BocconciniPizza10,
                price: 2900.00,
                description: "Tomato paste, mozzarella cheese, ramzan cheese, ham & bacon."
            }
        ]
    },
    {
        categoryId: 6,
        categoryName: "Rice",
        categoryImage: RisottoAllaMilanese,
        items: [
            {
                id: 27,
                name: "Cuttlefish With Basilico Rice",
                image: CuttlefishWithBasilicoRice,
                price: 1950.00,
                description: "Rice, basilico, cuttlefish, olive, cuppari, parmigiana, zucchini."
            },
            {
                id: 28,
                name: "Risotto Alla Milanese",
                image: RisottoAllaMilanese,
                price: 1350.00,
                description: "Saffron risotto with rice, butter, parmesan cheese."
            },
            {
                id: 29,
                name: "Seafood Rice",
                image: SeafoodRice,
                price: 2100.00,
                description: "Seer fish, cuttlefish, prawns, rice, olive, cuppari."
            }
        ]
    },
    {
        categoryId: 7,
        categoryName: "Sandwiches",
        categoryImage: VegetableSandwich,
        items: [
            {
                id: 30,
                name: "Mamma Mia Special Sandwich",
                image: MammaMiaSpecialSandwich,
                price: 1900.00,
                description: "Special house sandwich with premium ingredients."
            },
            {
                id: 31,
                name: "Ham & Cheese Sandwich",
                image: HamAndCheeseSandwich,
                price: 900.00,
                description: "Classic ham and cheese sandwich."
            },
            {
                id: 32,
                name: "Vegetable Sandwich",
                image: VegetableSandwich,
                price: 600.00,
                description: "Fresh vegetable sandwich with greens."
            },
            {
                id: 33,
                name: "Nutella With Bread Sandwich",
                image: NutellaWithBreadSandwich,
                price: 600.00,
                description: "Sweet Nutella spread on bread."
            },
            {
                id: 34,
                name: "Egg Sandwich",
                image: EggSandwich,
                price: 650.00,
                description: "Simple egg sandwich with fresh ingredients."
            }
        ]
    },
    {
        categoryId: 8,
        categoryName: "Burgers",
        categoryImage: CrispyChickenBurger,
        items: [
            {
                id: 35,
                name: "Crispy Chicken Burger",
                image: CrispyChickenBurger,
                price: 1150.00,
                description: "Crispy chicken patty with lettuce and sauce."
            },
            {
                id: 36,
                name: "Beef Burger",
                image: BeefBurger,
                price: 1350.00,
                description: "Juicy beef patty with classic toppings."
            },
            {
                id: 37,
                name: "Chicken Hamburger",
                image: ChickenHamburger,
                price: 950.00,
                description: "Chicken patty with fresh vegetables."
            },
            {
                id: 38,
                name: "Cheese Burger",
                image: CheeseBurger,
                price: 65.00,
                description: "Simple burger with melted cheese."
            }
        ]
    },
    {
        categoryId: 9,
        categoryName: "Submarines",
        categoryImage: ChickenSubmarine,
        items: [
            {
                id: 39,
                name: "Chicken Submarine",
                image: ChickenSubmarine,
                price: 1550.00,
                description: "Chicken submarine sandwich with fresh toppings."
            },
            {
                id: 40,
                name: "Beef Submarine",
                image: BeefSubmarine,
                price: 1600.00,
                description: "Beef submarine with French fries."
            }
        ]
    },
    {
        categoryId: 10,
        categoryName: "Grill",
        categoryImage: GrillCover,
        items: [
            {
                id: 41,
                name: "Grilled Chicken",
                image: GrilledChicken,
                price: 2700.00,
                description: "Tender grilled chicken with spices."
            },
            {
                id: 42,
                name: "Grilled Beef",
                image: GrilledBeef,
                price: 3350.00,
                description: "Juicy grilled beef with seasonings."
            },
            {
                id: 43,
                name: "Mix Grilled",
                image: MixGrilled,
                price: 4550.00,
                description: "Beef, chicken, seer fish, cuttlefish, prawns."
            }
        ]
    },
    {
        categoryId: 11,
        categoryName: "Fish Grill",
        categoryImage: FishGrillCover,
        items: [
            {
                id: 44,
                name: "Seer Fish Grilled",
                image: SeerFishGrilled,
                price: 2200.00,
                description: "Grilled seer fish with seasonings."
            },
            {
                id: 45,
                name: "Fried Cuttlefish",
                image: FriedCuttlefish,
                price: 1950.00,
                description: "Crispy fried cuttlefish."
            },
            {
                id: 46,
                name: "Jumbo Prawns Grilled",
                image: JumboPrawnsGrilled,
                price: 3300.00,
                description: "Grilled jumbo prawns with spices."
            },
            {
                id: 47,
                name: "Grilled Full Fish (450g)",
                image: GrilledFullFish450g,
                price: 3200.00,
                description: "Whole grilled fish, 450g."
            }
        ]
    },
    {
        categoryId: 12,
        categoryName: "Hot Drinks",
        categoryImage: CafeEspressoItaliano,
        items: [
            {
                id: 48,
                name: "Cafe Espresso Italiano",
                image: CafeEspressoItaliano,
                price: 450.00,
                description: "Authentic Italian espresso."
            },
            {
                id: 49,
                name: "Cappuccino",
                image: Cappuccino,
                price: 550.00,
                description: "Classic cappuccino with frothy milk."
            },
            {
                id: 50,
                name: "Hot Chocolate",
                image: HotChocolate,
                price: 650.00,
                description: "Rich and creamy hot chocolate."
            },
            {
                id: 51,
                name: "Green Tea",
                image: GreenTea,
                price: 225.00,
                description: "Refreshing green tea."
            },
            {
                id: 52,
                name: "Lime Tea",
                image: LimeTea,
                price: 220.00,
                description: "Zesty lime-infused tea."
            },
            {
                id: 53,
                name: "Milk Tea",
                image: MilkTea,
                price: 225.00,
                description: "Traditional milk tea."
            },
            {
                id: 54,
                name: "Sri Lankan Coffee",
                image: SriLankanCoffee,
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
        categoryImage: VanillaIceCream,
        items: [
            {
                id: 65,
                name: "Vanilla Ice Cream",
                image: VanillaIceCream,
                price: 500.00,
                description: "Classic vanilla ice cream."
            },
            {
                id: 66,
                name: "Chocolate Ice Cream",
                image: ChocolateIceCream,
                price: 500.00,
                description: "Rich chocolate ice cream."
            },
            {
                id: 67,
                name: "Nuts Ice Cream",
                image: NutsIceCream,
                price: 550.00,
                description: "Ice cream with crunchy nuts."
            },
            {
                id: 68,
                name: "Strawberry Ice Cream",
                image: StrawberryIceCream,
                price: 600.00,
                description: "Sweet strawberry ice cream."
            },
            {
                id: 69,
                name: "Fruit Salad with Ice Cream",
                image: FruitSaladIceCream,
                price: 650.00,
                description: "Fresh fruit salad with ice cream."
            }
        ]
    }
];

export default foodMenu;