import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import {Tooltip as ReactTooltip} from "react-tooltip";
import data from "./mapData.json"
import "./about.css";
import { useState } from "react";
import school from "../../assets/school.jpeg";
import school1 from "../../assets/school1.jpeg";

export const AboutMap = () => {
  const geoURL = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  const markers = [
    {markerOffset: 15, name: "India", coordinates: [80, 25]},
    {markerOffset: 15, name: "USA", coordinates: [-100, 40]},
  ]
  const [content, setContent] = useState("")
  const countries = ["India", "United States"]

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

  return <div className="about-map flex-a-cen-j-cen flex-d-col">
    <ReactTooltip>{content}</ReactTooltip>
    <div className="map">
      <ComposableMap fill="#eee" data-tip="">
        <ZoomableGroup fill="#eee" zoom={1}>
          <Geographies fill="#eee" geography={data}>
            {
              ({geographies}) => geographies.map((geo)=> (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo} 
                  stroke="rgba(255,255,255, 0.3)" 
                  fill={countries.includes(geo.properties.name)?"rgb(40,60,255)":"rgb(109,123,255)"}
                  onMouseEnter={()=>{
                    const {name} = geo.properties
                    setContent(`${name}`)
                  }}
                  onMouseLeave={()=>setContent("")}
                  onMouseDownCapture={()=>console.log(geo.properties.name)}
                  style={{
                    outline: "none",
                    hover: {
                      fill: "rgba(109,123,255, 0.7)",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          {
            markers.map(({name, coordinates, markerOffset}) => <Marker 
              key={name}
              coordinates={coordinates}>
                <circle r={3} fill="#F00" stroke="#FFF" strokeWidth={1} />
                <text textAnchor="middle" y={markerOffset} 
                  style={{fontSize: "12px"}}
                >{name}</text>
              </Marker>
            )
          }
        </ZoomableGroup>
      </ComposableMap>
    </div>

    <div className="schools flex">
      <div className="left flex">
            <div className="img">
              <img src={schoolData[selectIndex].cover} alt="" />
            </div>
            <div className="text flex-d-col">
              <div className="name font-28 semi-bold">{schoolData[selectIndex].name}</div>
              <div className="desc font-16 ">{schoolData[selectIndex].desc}</div>
            </div>
      </div>
      <div className="right flex-d-col">
        {
          schoolData.map((item, index)=>{
            return <div onClick={()=>setSelectIndex(index)} className="school-card">
              <div className="image-container">
                <img src={item.cover} alt="" />
              </div>
              <div className="name semi-bold font-28">
                {item.name}
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}