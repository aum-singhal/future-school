import { useState } from "react";
import "./about.css";
import { Fade } from "react-awesome-reveal";

export const AboutJoin = () => {
  const [selection, setSelection] = useState(0);

  return <div className="about-join flex-a-cen-j-cen">
    <div className="left font-24 semi-bold flex-d-col">
      <Fade direction="up" triggerOnce damping={0.3} cascade>
        <div className="head font-56 extra-bold">Join us NOW!!</div>
        <div onClick={()=>setSelection(0)} className="school cursor-pointer">As School</div>
        <div onClick={()=>setSelection(1)} className="user cursor-pointer">As Member</div>
      </Fade>
    </div>
    <Fade direction="up" className="right flex-a-cen flex-d-col" triggerOnce delay={500} >
        <>
        <div className="font-28 semi-bold">Join as {selection? "Member":"School"}</div>
        <form className="flex-d-col flex-a-cen" action="">
          <input type="text" name="" placeholder={selection? "Name":"Organization Name"} id="" />
          <input type="email" name="" placeholder={selection? "Personal Email":"Organization's Email"} id="" />
          <input type="number" name="" placeholder="Phone" id="" />
          <textarea name="" placeholder="Message" rows={7} id=""></textarea>
          <button className="bold font-20" type="submit">Join</button>
        </form>
    </>
    </Fade>
  </div>
}