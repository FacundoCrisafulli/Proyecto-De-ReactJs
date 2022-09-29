import "./NavBar.css";
import "../CartWidget/CartWidget.css"
import LibroLogo from '../../assets/logo.jpeg';
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <>
        <nav className='navegation'>
            <img className='logo' src={LibroLogo} alt='logo'/>
            <ul className='list'>
                <li><a href='/'>Novelas</a></li>
                <li><a href='/'>Comics</a></li>
                <li><a href='/'>Mangas</a></li>
                <li><a href='/'>Libros</a></li>
            </ul>
            <CartWidget/>
        </nav>
        </>
    )
    
}
