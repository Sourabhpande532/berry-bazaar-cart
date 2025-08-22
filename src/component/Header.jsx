import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-dark text-light py-2">
            <div className="container">
                <h1>Ecommerce Website</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className="nav-link">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}