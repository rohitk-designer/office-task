import leftarrow from "../../assets/images/arrowleft.svg";
import square from "../../assets/images/whitesquare.svg";
import "./second.css";
import Button from "../button/Button";
const Twopart = () => {
  return (
   
      <div
        className="second-part"
        style={{ padding: "10rem 0rem 10.2rem  15.4rem" , position: "relative" }} >
        <div>
          <div>
            <h4
              style={{
                fontSize: "2rem",
                color: "var(--brown-color)",
                weight: "500",
                letterSpacing: "0.32rem",
              }}>
              HOME OF LAW & ORDER
            </h4>
          </div>
          <div>
            <h1
              style={{
                fontSize: "7rem",
                fontFamily: "Marcellus, serif",
                fontWeight: "400",
                lineHeight: "11rem",
                color: "var(--white-color)",
              }}>
              EXPERTS OF JUSTICE
            </h1>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                marginTop: "1.2rem",
                lineHeight: "2.7rem",
                weight: "400",
                color: "var(--white-color)",
                fontSize:"1.6rem"
              }}>
              <p>
                Diam leo vitae tortor mauris faccibus odio nullam enim.At dolar
                <br></br>
                pellentesque eget et purrus. purrus mauris eget maecenas
                placreat<br></br>
                vehicula tortor massa
              </p>
            </div>
            <div className="sign"
              style={{
                fontFamily: "Italianno",
                fontWeight: "400",
                fontSize:"9rem !important",
                color: "var(--white-color)",
                opacity: "0.2",
                position: "absolute",
                top: "0rem",
              }}>
              Rohit
            </div>
          </div>

          <div style={{ marginTop: "8rem" }} className="button">
           
            <Button style={{ backgroundColor: "var(--brown-color)" }}/>
          </div>
          <div
            style={{ display: "flex", bottom: "5rem" }} className="imgicon">
            <div style={{position:"absolute",bottom:"5rem"}} className="imgicon-2">
              <img
                src={leftarrow} alt="leftarrow"
                style={{ width: "4.4rem", marginRight: "2rem" }}
              />
              <img
                src={square} alt="squre"
                style={{ width: "12px", marginRight: "2rem" }}
              />
              <img src={square} alt="squre" style={{ width: "12px" }} />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Twopart;
