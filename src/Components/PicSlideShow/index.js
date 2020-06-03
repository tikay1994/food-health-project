import React from "react";
import "./viewproject.css";
import hinh1 from "./img/food1.jpg";
import hinh2 from "./img/food2.jpg";
import hinh3 from "./img/food3.jpg";
import hinh4 from "./img/food4.jpg";
import hinh5 from "./img/food5.jpg";
import hinh6 from "./img/food6.jpg";
import hinh7 from "./img/food7.jpg";
import Slide from "./viewproject";
function View(props) {
  const collection = [
    { src: hinh1 },
    { src: hinh2 },
    { src: hinh3 },
    { src: hinh4 },
    { src: hinh5 },
    { src: hinh6 },
    { src: hinh7 },
  ];
  return (
    <div>
      <Slide
        input={collection}
        ratio={`3:2`}
        mode={`automatic`}
        timeout={`3000`}
      />
    </div>
  );
}

export default View;
