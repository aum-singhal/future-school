import "./home.css";
import img from "../../assets/landing.jpeg";

export const HomeLanding = () => {
  return <div className="home-landing section flex-d-col flex-a-cen-j-cen">
    <div className="image-container">
      <img className="image" src={img} />
    </div>

    <div className="flex heading-container">
      <div className="heading font-60 semi-bold">
        A World of Knowledge at Your Fingertips
      </div>

      <div className="sub-heading flex-d-col">
        <div className="font-18">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sint exercitationem, iste iure ea quo eligendi quibusdam itaque facere fugiat explicabo cumque rerum harum debitis eveniet blanditiis, commodi minima? Sed?</div>
        <form className="join flex">
          <input type="email" name="emaiL" id="email" placeholder="Enter your email" />
          <button type="submit">Join Now</button>    
        </form>
      </div>
    </div>
  </div>
}

// 1234567890aqwsdefrgtyhjukilop;[']
//