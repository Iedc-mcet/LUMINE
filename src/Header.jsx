import { Component } from "react";
import logo from "./assets/images/Untitled-design.png"
class Header extends Component {
  state={clicked:false}
  handleclick = ()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <>
      <header className="header">
        <a href="#" className="link">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
        </a>
        <nav id="navbar" className={this.state.clicked ? "#navbar ":"#navbar active"}>
          <a href="#home" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About us
          </a>
          <a href="#event" className="link">
            Event
          </a>
          <a href="#execom" className="link">
            Execom
          </a>
          <a href="#contact" className="link">
            Contact us
          </a>
        </nav>
          <div id="mobile" onClick={this.handleclick} style={{pointer:"crusor"}}>
            <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
          </div>
      </header>
    </>
  );
}
}

export default Header;
