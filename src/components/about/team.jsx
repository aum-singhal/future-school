import "./about.css";
import one from "../../assets/team/one.jpeg";
import two from "../../assets/team/two.jpeg";
import three from "../../assets/team/three.jpeg";
import four from "../../assets/team/four.jpeg";

export const AboutTeam = () => {
  const team = [
    {img: one, name: "John", email: "example@example.com", desc: "lorem Ipsum is Lorem Ipsum but Lorem Ipsum may be used as the Lorem Ipsum in several different contexts and may be used in several different contexts"},
    {img: two, name: "Jimmy", email: "example@example.com", desc: "lorem Ipsum is Lorem Ipsum but Lorem Ipsum may be used as the Lorem Ipsum in several different contexts and may be used in several different contexts"},
    {img: three, name: "Jinny", email: "example@example.com", desc: "lorem Ipsum is Lorem Ipsum but Lorem Ipsum may be used as the Lorem Ipsum in several different contexts and may be used in several different contexts"},
    {img: four, name: "Sejal", email: "example@example.com", desc: "lorem Ipsum is Lorem Ipsum but Lorem Ipsum may be used as the Lorem Ipsum in several different contexts and may be used in several different contexts"},
  ]

  return <div className="about-team flex-d-col">
    <div className="heading bold font-40 text-center">Our Team</div>
    <div className="cards-container flex-j-cen">
      {
        team.map((item, index) => {
          return <div className="card flex" key={index}>
            <div className="image-container">
              <img src={item.img} alt="" />
            </div>
            <div className="text-container flex-d-col">
              <div className="top flex-d-col">
                <div className="name semi-bold font-24">{item.name}</div>
                <div className="email font-18">{item.email}</div>
              </div>
              <div className="desc font-16">{item.desc}</div>
            </div>
          </div>
        })
      }
    </div>
  </div>
}