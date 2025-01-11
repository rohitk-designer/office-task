import "./third.css"
import first from "../../assets/images/first.svg"
import second from "../../assets/images/second.svg"
import third from "../../assets/images/third.svg"

const Third = () => {
  return (
    <div>
      <div className="third-div">
        <div className="third-one same">
            <div>
                <img src={first} alt="first" style={{}}/>           
            </div>
            <div style={{marginLeft:"3.2rem"}}>
            <h4 style={{fontSize:"2.6rem",fontWeight:"500"}}>BEST LAW FIRM</h4>
            <p style={{fontSize:"1.6rem",fontWeight:"400"}}>45 Years of Experience</p>
            </div>
        </div>
        <div className="third-two same">
        <div>
            <img src={second} alt="second" style={{width:"11.7rem" ,height:"11.4rem"}}/>
        </div> 
        <div style={{marginLeft:"3.2rem"}}>
        <h4 style={{fontSize:"2.6rem",fontWeight:"500"}}>BEST LAW FIRM</h4>
        <p style={{fontSize:"1.6rem",fontWeight:"400"}}>45 Years of Experience</p>
        </div>
        </div>
        <div className="third-three same">
            <div> <img src={third} alt={third}  style={{width:"11.7rem" ,height:"11.4rem"}}/></div>
            <div style={{marginLeft:"3.2rem"}}>
            <h4 style={{fontSize:"2.6rem",fontWeight:"500"}}>BEST LAW FIRM</h4>
            <p style={{fontSize:"1.6rem",fontWeight:"400"}}>45 Years of Experience</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Third
