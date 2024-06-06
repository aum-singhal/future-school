import { Fade } from "react-awesome-reveal";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUsers, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const HomeRibbonStats = () => {
  return <div className="home-ribbon-stats flex section">
    <Fade triggerOnce direction="up" cascade damping={0.3}>
      <div className="item">
      <FontAwesomeIcon style={{"color":"rgb(38, 192, 152)"}} icon={faSchool} />
        <div className="text">
          <div className="font-32">54+</div>
          <div className="font-16">Schools joined</div>
        </div>
      </div>
      <div className="item ">
        <FontAwesomeIcon style={{"color":"rgb(250, 128, 148)"}} icon={faUsers} />
        <div className="text">
          <div className="font-32">12100+</div>
          <div className="font-16">Students Nurtured</div>
        </div>
      </div>
      <div className="item ">
        <FontAwesomeIcon style={{"color":"rgb(147, 158, 250)"}} icon={faLocationDot} />
        <div className="text">
          <div className="font-32">100+</div>
          <div className="font-16">Cities reached</div>
        </div>
      </div>
      <div className="item">
        <FontAwesomeIcon style={{"color":"rgb(38, 192, 152)"}} icon={faSchool} />
        <div className="text">
          <div className="font-32">54+</div>
          <div className="font-16">Schools joined</div>
        </div>
      </div>
    </Fade>
  </div>
}