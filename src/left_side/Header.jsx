import Logo from "./Logo.jsx";
import '../index.css'

export default function Header() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row sm:justify-around items-center gap-6 text-center sm:text-left p-4">

                {/* Logo and Title */}
                <div className="w-1/2 h-auto">
                    <Logo />
                </div>

                <div className="flex flex-col items-center sm:items-start w-full h-auto  ">
                    <h1 className="font-inter font-black  text-2xl font-['inter'] sm:text-4xl text-center md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  text-white mb-4">
                        Mamma Mia Delicious Menu
                    </h1>
                </div>

            </div>
        </div>
    );
}
