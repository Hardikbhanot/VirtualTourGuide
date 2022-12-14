import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./pointer.json";
// import Image from "next/image";
import gatewayIndia from "./gateway.jpeg";
import Logo from './logo.jsx';
import Dashline from "./dashline";
import Dashline2 from "./dashline2";
import Mapsvg from "./mapsvg";
import './style.scss';
function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

 
  return (
    <>
      <div className="lottie-div">
        <svg
          style={{ position: "absolute" }}
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1920" height="1080" fill="#00000000" />
          <path
            d="M2133.303189365226,13.999999999999915C2154.023570396146,76.5801021819496,2256.723834726613,157.55150747728956,2250.470074811693,214.74030654584908C2244.216314896773,271.92910561440857,2149.836532544637,326.7256720514402,2095.7806298757073,357.132794411357C2041.7247272067775,387.5399167712738,1983.5781608945788,409.13749137676814,1926.1346587981145,397.1830407053498C1868.6911567016502,385.2285900339315,1810.7770379475135,337.9453385517959,1751.1196172969217,285.4060903828469C1691.4621966463299,232.86684221389797,1591.5117152949565,142.12351822471996,1568.1901348945635,81.94755169165614C1544.8685544941704,21.771585158592323,1579.7111607001445,-20.92410180311886,1611.1901348945635,-75.64970881553602C1642.6691090889824,-130.37531582795316,1708.5158180036562,-228.47323779216714,1757.0639800610772,-246.4060903828468C1805.6121421184982,-264.33894297352646,1848.6661757076733,-169.79583971376434,1902.4791072390897,-183.24682435961395C1956.292038770506,-196.69780900546357,2042.6634556850613,-330.8630845602386,2079.941569249575,-327.11199825794444C2117.2196828140886,-323.3609119556503,2117.2541852735635,-217.59230625550646,2126.147788626172,-160.74030654584905C2135.04139197878,-103.88830683619165,2112.582808334306,-48.580102181949776,2133.303189365226,13.999999999999915C2154.023570396146,76.5801021819496,2256.723834726613,157.55150747728956,2250.470074811693,214.74030654584908"
            fill="#d4a05a"
          />
        </svg>
       
      </div>
      <div className="hero" style={{ overflowX: "hidden" }}>
        <div className="h_heading">
          <Logo/>
          <h1>
            {" "}
            <span className="virtual"> VIRTUAL </span>
            <br /> TOUR GUIDE
          </h1>
          <div className="button">
          <button className="location">Explore <Lottie options={defaultOptions} style={{position:'relative'}} height={60} width={60} /></button>
          </div>
        </div>
        <div className="h_image">
          <img
            className="g_image"
            height={300}
            width={400}
            src={gatewayIndia}
            style={{ zIndex: 1 }}
          />
        </div>

        
        <Dashline/>
        <Dashline2/>
        <Mapsvg/>
              </div>
    </>
  );
}

export default Hero;
