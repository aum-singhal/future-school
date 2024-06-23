import "./about.css";
import one from "../../assets/innovate/one.jpeg";
import three from "../../assets/innovate/three.jpeg";
import five from "../../assets/innovate/five.jpeg";
import { Fade } from "react-awesome-reveal";

export const AboutAdvantages = () => {
  const data = [
    {head: "Hours Freed", img: one},
    {head: "Real-Time Intelligence", img: five},
    {head: "Student Centered", img: three},
  ]

  return <Fade direction="up" triggerOnce className="about-advantages flex-d-col">
    <>
    <div className="text-center heading bold font-40">Advantages</div>

    <div className="card-holder flex">
      {
        data.map((item, index) => {
          return <div className="card flex-d-col flex-a-cen" key={index}>
            <img src={item.img} alt="" />
            <div className="head font-20 semi-bold">{item.head}</div>
          </div>
        })
      }
    </div>
    </>
  </Fade>
}