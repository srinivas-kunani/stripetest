import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Requested Page Cannot be found</h2>
            <Link to='/'> Click to return to home page</Link>
        </div>
    );
}
 
export default NotFound;