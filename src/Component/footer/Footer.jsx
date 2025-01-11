
import Facebook from "../../assets/images/facebook.svg"
import Twiter from "../../assets/images/Twiter2.svg"
import Instgram from "../../assets/images/Twiter2.svg"
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div style={{display:"flex",justifyContent: 'space-around',alignItems:"center" ,backgroundColor:"var(--gray-color)",padding:"2rem 0rem"}} className="footer">
        <div>
            <p style={{fontSize:"1.6rem",color:"var(--footer-color)"}}>Privacy</p>
        </div>
        <div>
            <p style={{fontSize:"1.6rem",color:"var(--footer-color)"}}>Copyright  Dotcreativemarket, All Right Reserved</p>
        </div>
        <div>
          <img src={Facebook} alt="" style={{marginLeft:"1rem"}}/>
          <img src={Twiter} alt="" style={{marginLeft:"1rem"}}/>
          <img src={Instgram} alt=""  style={{marginLeft:"1rem"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
