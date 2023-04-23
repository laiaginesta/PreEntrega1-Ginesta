import Logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-light justify-content-center col-12 navbar-expand-lg" >
            
            <Link to='/'>
            <img className="navbar-brand" src={Logo} alt='logo'/>
            </Link>
            <div className='Categories collapse navbar-collapse'>
                <NavLink to={'/category/guia'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guías de viaje</NavLink>
                <NavLink to={'/category/template'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Templates</NavLink>
                <NavLink to={'/category/prints'} className ={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Prints</NavLink>
               
            </div>
            <button className='btn '><CartWidget /></button>
            
        </nav>
    )
}

export default NavBar