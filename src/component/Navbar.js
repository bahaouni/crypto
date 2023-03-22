import logo from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/logo.png'
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <header class="header-section clearfix">
            <div class="container-fluid">
                <a href="a" class="site-logo">
                    <img src={logo} alt="" />
                </a>
                <div class="responsive-bar"><i class="fa fa-bars"></i></div>
                <a href="aa" class="user"><i class="fa fa-user"></i></a>
                <Link to="/signup" class="site-btn">Sign Up Free</Link>
                <nav class="main-menu">
                    <ul class="menu-list">
                        <li><a href="a">Solution</a></li>
                        <li><a href="a">Features</a></li>
                        <li><a href="a">News</a></li>
                        <li><a href="a">About</a></li>
                        <li><a href="a">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;
