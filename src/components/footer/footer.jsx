import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faLinkedinIn} from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return <div className="footer flex-d-col flex-a-cen">

    <form className="contact flex-d-col flex-a-cen">
      <div className="text-center font-40 bold">Get In Touch</div>
      <input type="text" name="name" id="name" placeholder="Name" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <textarea name="message" id="message" rows={5} cols={25} placeholder="Enter your message"></textarea>
      <button type="submit" className="cursor-pointer font-18 semi-bold">Send</button>
    </form>

    <div className="bottom-container flex-a-cen-j-cen">
      <div className="left flex">
        <div className="about color-white">
          {/* <img src="" alt="" /> */}
          <div className="font-26 semi-bold">Take Your Learning To The Next Level.</div>
          <div className="font-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt aut unde labore illum.</div>
        </div>  
        <div className="links color-white flex-d-col">
          <div className="item">About Us</div>
          <div className="item">Blogs</div>
        </div>
        <div className="social flex-d-col">
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </div>
      </div>
    </div>
    
  </div>
}
