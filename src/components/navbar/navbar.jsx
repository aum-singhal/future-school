import "./navbar.css";

export const Navbar = () => {
  return <div className="navbar flex-a-cen-j-spbet">
    <div id="logo" className="font-24 bold">Future Schools</div>
    <div className="menu medium-bold flex-a-cen">
      <div className="item">Home</div>
      <div className="item">About Us</div>
      <div className="item">Blogs</div>
    </div>
    <button className="join semi-bold cursor-pointer">Join Now</button>
  </div>
}