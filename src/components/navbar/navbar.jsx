import { useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logosmall.png";

export const Navbar = () => {
  const nav = useNavigate();

  return <div className="navbar flex-a-cen-j-spbet">
    <div id="logo"><img src={logo} alt="" /></div>
    <div className="menu medium-bold flex-a-cen">
      <div onClick={()=> nav("/")} className="item">Home</div>
      <div onClick={()=> nav("/about")} className="item">About Us</div>
      <div className="item">Blogs</div>
    </div>
    <button onClick={()=> nav("/#contact")} className="join semi-bold cursor-pointer">Join Now</button>
  </div>
}