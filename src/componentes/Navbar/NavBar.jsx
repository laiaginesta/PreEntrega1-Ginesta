import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className='navbar'>
            {/* <Link to='/' className="logo">
                <div className="logo">
                    {/* <img src='/public/fondonav.jpg' alt="logoelaguila" /> */}
                {/* </div> */}
            {/* </Link> */}
            <nav>
                <Link to={"/"}>
                <div className="logo">
                <img src="/public/Logo-arte.jpeg" alt="" />
                </div>
                </Link>
                {/* <div class="menu fw-bold"> */}
                    <NavLink to='/' className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Home</NavLink>
                    <NavLink to='/category/Decoracion'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Decoración</NavLink>
                    <NavLink to='/category/Modern Art'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Modern Art</NavLink>
                    <Link className="" to='/cart' >
                        <CartWidget />
                    </Link>
                {/* </div> */}
            </nav>
            
           
        </div>
    )
}


export default NavBar