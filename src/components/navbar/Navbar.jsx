import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar