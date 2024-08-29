import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import members from "./Members";
import faisal from "./assets/images/Faisal.jpg"
import shilja from "./assets/images/shilja.jpeg"

function Execom() {
  return (
    <div>
      <div className="execom" id="execom">
        <h1 className="a_h1">Meet our team</h1>
        <div className="exe_row">
          <div className="staff">
            <div className="staff_card">
              <div className="imges">
                <img src={faisal} alt=""  className="imgs"  />
              </div>
              <div className="staff_sec">
                <h1>Mhd Faisal</h1>
                <p>Nodal officer</p>
              </div>
            </div>
            <div className="staff_card">
              <div className="imges">
                <img src={shilja} alt="" className="imgs"/>
              </div>
              <div className="staff_sec">
                <h1>Shilja</h1>
                <p>Nodal officer</p>
              </div>
            </div>
          </div>
          <ScrollCarousel autoplay autoplaySpeed={9} speed={9}>
            {members.map((value) => (
              <div key={value.id} className="card">
                  <div className="img-bx">
                    <img src={value.img} className="imga" alt="img" />
                  </div>
                  <div className="content">
                    <div className="detail">
                      <h2>
                        {value.name}
                        <br />
                        <span className="card_p">{value.post}</span>
                      </h2>
                    </div>
                  </div>
                </div>
            ))}
          </ScrollCarousel>
        </div>
      </div>
    </div>
  );
}

export default Execom;
