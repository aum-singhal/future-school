import "./home.css";
import one from "../../assets/innovate/one.jpeg";
import three from "../../assets/innovate/three.jpeg";
import four from "../../assets/innovate/four.jpeg";
import five from "../../assets/innovate/five.jpeg";
import { Fade } from 'react-awesome-reveal';

export const HomeStats = () => {
  const stats = [
    {head: "Hours Freed", img: one},
    {head: "Real-Time Intelligence", img: five},
    {head: "Student Centered", img: three},
    {head: "Mastery Focused", img: four},
    {head: "Any Platform", img: three},
    {head: "Mastery Focused", img: one},
  ]
  
  return <div className="home-stats flex-d-col flex-a-cen-j-cen">
    <div className="heading text-center font-40 bold">
      Our Innovations
    </div>

    <div className="stats">
      <Fade direction='up' triggerOnce cascade damping={0.15}> 
        {
          stats.map((item, index) => {
            return <div className="card" key={index}>
              <img src={item.img} height={"200px"} alt="" />
              <div className="head font-24 semi-bold">{item.head}</div>
            </div>
          })
        }
      </Fade>
    </div>
  </div>
}