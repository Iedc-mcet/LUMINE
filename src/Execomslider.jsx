import React from "react";
import members from "./Members";
import ScrollCarousel from "scroll-carousel-react";
const Execomslider =() =>{
  return (
    <ScrollCarousel
    autoplay:false
    autoplaySpeed={9}
    speed={7}
    >
      {members.map((value, indexmember) => {
            <div key={indexmember.id}>
              <img src={value.img} alt={value.img} className="member-img" />
              <h3>{value.name}</h3>
              <h4>{value.post}</h4>         
            </div>
      })}
    </ScrollCarousel>
  );
}

export default Execomslider;
