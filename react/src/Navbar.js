import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Solution Shore Blog</h1>
            <div className="links">
                <Link to = '/'> Home </Link>
                <Link to = '/create'> New Blog </Link>
                <Link to = '/SetupCard'> Setup Card </Link>
                <Link to = '/Donate'> Donate</Link>
                <Link to = '/Pay'>Pay</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;