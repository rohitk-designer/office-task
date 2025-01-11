import Accoudian from "./Accoudian"
import "./fivesection.css"

const FiveSection = () => {
  return (
    <div style={{display:"flex",alignContent:"center",justifyContent:"center",width:"100%", padding:"4rem"}}>
        <div style={{width:"60%"}} className="fivediv-acc">
        <div  style={{textAlign:"center"}} className="heading" >
            <h1 style={{fontSize:"7rem",lineHeight:"10rem",fontFamily:"Marcellus",textAlign:"center",}}>IMPORTANT ANSWER</h1>
            <p style={{color:"var(--brown-color)",font:"2rem"}}>OUR PAST & OUR FUTURE</p>
        </div>
        <div >
        <Accoudian/>
        </div>
        </div>
       
      
    </div>
  )
}

export default FiveSection
