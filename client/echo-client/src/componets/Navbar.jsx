import { useNavigate } from 'react-router-dom';
import { TbCloverFilled } from "react-icons/tb";
import '../style/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate(); // Initialize navigation function

    return (
        <div className="navbar">
            <div onClick={() => navigate("/")}> {/* Use navigate instead of redirect */}
                <img className='logo' src="/images/logo.png" alt="logo" />
            </div>
            <h2 className='brand'>Echo<TbCloverFilled color='palevioletred' size={70} /></h2>
            <div className="links">
                <button onClick={() => { navigate("/signup") }}>Signup</button>
                <button onClick={() => { navigate("/login") }}>Login</button>
                <button onClick={() => { navigate("/connect") }}>Connect</button>
                <button onClick={() => { navigate("/chat") }}>Chat</button>
            </div>
        </div>
    );
}

export default Navbar;
