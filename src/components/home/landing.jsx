import "./home.css";
import img from "../../assets/landing-vector.svg";

export const HomeLanding = () => {
  return <div className="home-landing flex flex-a-cen-j-cen">
    <div className="svg-container"></div>

    <div className="flex-d-col heading-container">
      <div className="heading font-60 bold">
        Take your learning to the next level.
      </div>

      <div className="sub-heading flex-d-col">
        <div className="font-18">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sint exercitationem, iste iure ea quo eligendi quibusdam itaque facere fugiat explicabo </div>
        <form className="join flex">
          <input type="email" name="emaiL" id="email" placeholder="Enter your email" />
          <button type="submit" className="semi-bold">Join Now</button>    
        </form>
      </div>
    </div>

    <div className="image-container">
      <img className="image" src={img} />
    </div>
  </div>
}
