import Container from "react-bootstrap/Container";
import logo from "../../assets/images/logo.svg";
import phone from "../../assets/images/phone.svg"
import clock from "../../assets/images/clock.svg"
import leftarrow from "../../assets/images/arrowleft.svg"
import square from "../../assets/images/square.svg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Header.css";
const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="main-header">
            <div className="logo-div">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="header-uper">
              <div className="header-uper-one">
                <div className="header-phone">
                    <div className="header-phone-onediv" style={{marginRight:"4rem"}}>
                        <img src={phone} alt="phone-logo" style={{ width: '1.6rem', height:"1.6rem",marginBottom:"0.3rem" }} />
                        <span className="phone-one" style={{fontSize:"16px", marginLeft:"0.1rem",lineHeight:"1.7rem"}}>+383(21)2343984</span>
                    </div>
                    <div>
                        <img src={clock} alt="clock-logo" style={{ width: '1.597rem', height:"1.6rem",marginBottom:"0.4rem" }}/>
                        <span className="phone-one" style={{fontSize:"16px" , marginLeft:"0.4rem",lineHeight:"1.7rem"}}>MONDAY-FRIDAY 7:30AM-6:30PM</span>
                    </div>
                </div>
                <div  className="inigfb"  id="blockid"  style={{display:"flex", gap:"2rem", fontSize:"16px" , color: "var(--brown-color)", lineHeight:"1.7rem"}}>
                    <span>IN.</span>
                    <span>IG.</span>
                    <span>FB.</span>
                </div>
              </div>
              <div className="header-uper-two ">
                <div className="header-uper-onepart">
                    <div className="nav">
                    <img src={leftarrow} alt="leftarrow"/>
                    <span style={{marginLeft:"1.64rem",fontWeight:"500"}}>HOME</span>
                    </div>
                    <div className="nav">
                            <img src={square} alt="list-icon"/>
                            <span className="squre">ABOUT</span>
                    </div>
                    <div className="nav">
                    <img src={square} alt="list-icon"/>
                    <span className="squre">CARRER</span>
                    </div>
                    <div className="nav">
                    <img src={square} alt="list-icon"/>
                    <span className="squre">CONTACT</span>
                    </div>
                    
                   
                </div>
                <div className="header-upar-twopart">
                    <div className="class" style={{padding:"1.6rem 2.5rem 1.6rem 3rem", border:"1px solid var(--border-color)", color:"var(--border-color)"}} >
                        <h3 style={{fontWeight:"500",fontSize:"1.6rem"}}>FREE CONSULTION</h3>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
