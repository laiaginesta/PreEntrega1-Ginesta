import Logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-light justify-content-center col-12 navbar-expand-lg" >
             <img className="navbar-brand" src={Logo} alt='logo'/>
            <div className='collapse navbar-collapse'>
                <button className="btn  ">Prints</button>
                <button className="btn  ">Travel Guides</button>
                <button className="btn ">Social media templates</button>
            </div>
            <button className='btn '><CartWidget /></button>
            
        </nav>
    )
}

export default NavBar