import { Fade } from "react-awesome-reveal";
import "./home.css";

export const HomeRibbonStats = () => {
  return <div className="home-ribbon-stats flex section">
    <Fade triggerOnce direction="up" cascade damping={0.3}>
      <div className="item">
        <div className="font-32">54+</div>
        <div className="font-16">Schools joined</div>
      </div>
      <div className="item ">
        <div className="font-32">12100+</div>
        <div className="font-16">Students Nurtured</div>
      </div>
      <div className="item ">
        <div className="font-32">100+</div>
        <div className="font-16">Cities reached</div>
      </div>
      <div className="item">
        <div className="font-32">54+</div>
        <div className="font-16">Schools joined</div>
      </div>
    </Fade>
  </div>
}