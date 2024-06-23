import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import {Tooltip as ReactTooltip} from "react-tooltip";
import data from "./mapData.json"
import "./about.css";
import { useState } from "react";

export const AboutMap = () => {
  const geoURL = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"
  const markers = [
    {markerOffset: 15, name: "India", coordinates: [80, 25]},
    {markerOffset: 15, name: "USA", coordinates: [-100, 40]},
  ]
  const [content, setContent] = useState("")
  const countries = ["India", "United States"]

  return <div className="about-map flex-a-cen-j-cen">
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
  </div>
}