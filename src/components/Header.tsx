import CodingFactoryLogo from "./CodingFactoryLogo.tsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <>
            <header className="bg-[#782024] fixed w-full">
                <div className="container px-4 mx-auto flex items-center justify-between">
                    <CodingFactoryLogo/>
                    <nav className="flex gap-4">
                        {/*<a className="text-white hover:underline hover:underline-offset-4" href="/"> Home </a>*/}
                        <Link to="/" className="text-white hover:underline hover:underline-offset-4"> Home </Link>
                        <Link to="/examples/name-changer" className="text-white hover:underline hover:underline-offset-4"> Name Changer </Link>
                    </nav>
                </div>


            </header>
        </>
    )
}
export default Header;