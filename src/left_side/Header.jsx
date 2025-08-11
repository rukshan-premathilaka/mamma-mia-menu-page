import Logo from "./Logo.jsx";

export default function Header() {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-around items-center gap-4 text-center sm:text-left">
            <div className="w-32 sm:w-1/2 h-auto">
                <Logo />
            </div>
            <div>
                <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl uppercase text-white">
                    Lorem ipsum dolor.
                </h1>
            </div>
        </div>
    );
}
