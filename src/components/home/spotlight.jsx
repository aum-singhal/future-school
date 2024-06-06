import "./home.css";
import school from "../../assets/school.jpeg";
import school1 from "../../assets/school1.jpeg";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

export const HomeSpotlight = () => {
  const schoolData = [
    { name: 'Demo Name', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 1', cover: school1, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 2', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 3', cover: school1, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 4', cover: school1, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 5', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 6', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 7', cover: school1, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 8', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
    { name: 'Demo Name 9', cover: school, desc: "lorem ipsum dolor sit amet, consectetur adip inc commodo sit amet con et just e i f ullam et i f ullam et i f ullam et i f ull am et i f ullam et i f ull am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f u ll am et i f ull am et i f ull am et i f ull am et i f ull am et i f u" },
  ]
  const [selectIndex, setSelectIndex] = useState(0);

  return <div className="home-spotlight flex-d-col section">
    <Fade triggerOnce direction="up">
      <div className="head semi-bold font-48 text-center">
        Featuring
      </div>
    </Fade>

    <Fade triggerOnce direction="up">
      <div className="info-container flex">
        <div className="left">
          <img className="image" src={schoolData[selectIndex].cover} />
        </div>
        <div className="right">
          <div className="name font-26 bold">{schoolData[selectIndex].name}</div>
          <div className="desc">{schoolData[selectIndex].desc}
          </div>
        </div>
      </div>
    </Fade>

    <div className="card-container flex-a-cen-j-spevn flex">
      <Fade triggerOnce direction="up" cascade damping={0.05}>
        {
          schoolData.map((item, index) => {
            return <div className="card" key={index} onClick={()=>setSelectIndex(index)}>
              <div className="image-container">
                <img className="image" src={item.cover} />
              </div>
              <div className="name font-26 semi-bold">{item.name}</div>
            </div>
          })
        }
      </Fade>
    </div>
  </div>
}