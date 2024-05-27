import "./home.css";
import school from "../../assets/school.jpeg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

export const HomeSpotlight = () => {
  const schoolData = [
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"}, 
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
    { name: 'School Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u"},
  ]
  const [showSchools, setShowSchools] = useState(false);

  return <div className="home-spotlight flex-d-col section">
    <Fade triggerOnce direction="up">
      <div className="head semi-bold font-48">
        Featuring

        <div className="sub-heading regular-bold font-16 flex-a-cen-j-spbet">
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
          <div onClick={()=> setShowSchools(true)} className="view-all semi-bold text-underline cursor-pointer">View All ↗</div>
        </div>
      </div>
    </Fade>

    <div className="card-container flex-a-cen-j-spevn flex-wrap">
      <Fade triggerOnce direction="up" cascade damping={0.2}>
        {
          schoolData.map((item, index) => {
            return index < 8? <div className="card" key={index}>
              <div className="image-container">
                <img className="image" src={item.cover} />
              </div>
              <div className="name font-26 semi-bold">{item.name}</div>
            </div>: ""
          })
        }
      </Fade>
    </div>

    <div className={showSchools? "show-all" : "show-all-none"}>
      <div onClick={()=> setShowSchools(false)} className="close cursor-pointer">X</div>
      <div className="card-container flex-wrap ">
        {
          schoolData.map((item, index) => {
            return <div className="card" key={index}>
              <div className="image-container">
                <img className="image" src={item.cover} />
              </div>
              <div className="name font-26 semi-bold">{item.name}</div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}