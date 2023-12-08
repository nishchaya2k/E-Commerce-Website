import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {

    const [scrolled,setScrolled] = useState(false);


    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200)
        setScrolled(true);

        else
        setScrolled(false)
    }

    useEffect(() => {           //its a hook, its a first method which run after rendering of component  
        window.addEventListener("scroll",handleScroll)
    }, [])                    //dependency array contain state whenever it updates 

    return (
        <header className={`main-header ${scrolled ? "sticky-header": ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">QISTORE.</div> {/* Quality Items Store */}
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <CgShoppingCart/>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
