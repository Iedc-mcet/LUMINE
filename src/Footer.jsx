import React from "react";
function Footer() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    e.preventDefault()
    fetch(
      "https://script.google.com/macros/s/AKfycbyuJ2TK_j2fEbZK6OsJxFOq80Hu0I8xFThHSTziFlNuFGPQ0v1Jmck9EiXk31MvPdMYJg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="footer" id="contact">
            <div>
              <h1 className="a_h1">Love to hear your opinion 👋🏼</h1>
            </div>
        <div className="f_content">
          <div className="column1">

            <form id="form" className="form" onSubmit={(e) => Submit(e)}>
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your name"
                autoComplete="name"
              />
              <input
                type="email"
                name="Email"
                required
                autoComplete="email"
                placeholder="Enter your Email"
              />
              <textarea
              type="text"
                name="Message"
                required
                autoComplete="off"
                placeholder="Enter the message"
              ></textarea>
            <button type="submit" className="submit">Let's connect</button>
            </form>
          </div>
          <div className="column2">
            <div className="contact">
              <div className="contact_head">
                <i className="fa-solid fa-location-dot"></i>
                <h1 className="f_h2">Find us here</h1>
              </div>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/rb8Pv36LWuLYqQMs8"
              >
                <p>
                  Via, Pallur PO Near Wadakancherry,
                  <br />
                  Cheruthuruthy Rd, Desamangalam,
                  <br />
                  Kerala 679532
                </p>
              </a>
            </div>
            <div className="contact">
              <div className="contact_head">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h1 className="f_h2">Let's connect</h1>
              </div>
              <p>
                <a href="mailto:iedc_mcet@malabarcet.ac.in">
                  iedc_mcet@malabarcet.ac.in
                </a>
                <a href="tel:+919846132862">98461 32862</a>
                <section className="icos">

                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram ico"></i>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook ico"></i>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-x-twitter ico"></i>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin ico"></i>
                </a>
                </section>
              </p>
            </div>
          </div>
        </div>
        <div className="f_footer">
          <a href="https://www.linkedin.com/in/dheeraj-pilakkat/" target="_blank">
            <p>© 2024 | All Right Reserved || Dheeraj</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
