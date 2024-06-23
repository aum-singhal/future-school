import "./about.css";
import logo from "../../assets/logo.png";

export const AboutLanding = () => {
  return <div className="about-landing flex-d-col flex-a-cen">
    <div className="mission-head bold font-48">
    Take Your Learning To The Next Level.
    </div>
    <div className="flex-a-cen-j-spbet">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right flex-d-col">
        <div className="heading bold font-40">Future Schools Now</div>
        <div className="font-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium at voluptate recusandae, officiis dolorum culpa alias deserunt error repudiandae laboriosam quos ex totam perspiciatis similique corporis non, consequatur accusantium ducimus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet modi iure odit est perferendis id commodi veniam tenetur nemo molestiae eaque quis dignissimos velit, repellat vero quam atque maxime aperiam.
        </div>
      </div>
    </div>
  </div>
}