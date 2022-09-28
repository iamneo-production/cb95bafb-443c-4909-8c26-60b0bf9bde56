import "./Navbar.css";
const Navbar=()=>{
    return (
        <div className="nav">
            <a className="nv" href="/">
            <div className="navbar-home">
            Home
            </div>
            </a>
            <a className="nv" href="/cart">
            <div className="navbar-cart">
                Cart
            </div>
            </a>
            <a className="nv" href="/order">
            <div className="navbar-myorder">
                MyOrder 
            </div>
            </a>
            <a className="nv" href="/login">
            <div className="navbar-auth">
                Logout
            </div>
            </a>
        </div>

    )
}
export default Navbar;
