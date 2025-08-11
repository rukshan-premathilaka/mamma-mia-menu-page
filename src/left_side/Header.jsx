import Logo from "./Logo.jsx";

export default function Header() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row 2xl:flex-row sm:justify-around items-center gap-6 text-center sm:text-left p-4">

                {/* Logo and Title */}
                <div className="w-32 sm:w-1/2 h-auto">
                    <Logo />
                </div>

                <div className="flex flex-col items-center sm:items-start">
                    <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase text-white mb-4">
                        Mamma Mia Dragon Menu
                    </h1>
                </div>

            </div>

        </div>


    );
}
