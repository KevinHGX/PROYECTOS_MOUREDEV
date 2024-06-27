import { Link } from "react-router-dom";

const Navbar = () => {

    return (<>
        <div className="nav">
            <div className="logo">
                <Link className="nav-link" to="/Home">by: Nivek</Link>
            </div>
            <div className="nav-links">
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Home">Home</Link>
                    </div>
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Select">Select</Link>
                    </div>
                
                    <div className="nav-item">
                        <Link className="nav-link" to="/Ranking">Ranking</Link>
                    </div>

            </div>
        </div>
    </>);
}

export default Navbar;