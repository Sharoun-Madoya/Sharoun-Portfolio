function Navbar(){
    return(
        <div className="navContainer">
            <ul className="container">  
            <li>  
                <Link to="/">Home</Link>  
            </li>  
            <li>  
                <Link to="/about">About Us</Link>  
            </li>  
            <li> 
            <Link to="/contact">Contact Us</Link>  
            </li>  
            </ul>  
        </div>
    )
}