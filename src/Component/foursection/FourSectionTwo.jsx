import Button from "../button/Button"
import "./foursectiontwo.css"

const FourSectionTwo = () => {
  return (
    <div>
      <div className="foursectiontwo">
        <div>
            <h2 style={{fontSize:"3rem"}}>An interview With Jack Morgan McGills</h2>
            <p style={{fontSize:"1.6rem"}}>Eu elementum faucibus at consectetur suspendisse pellentesque duis</p>
        </div>
        <div>
           <Button style={{ backgroundColor: "var(--border-color)",color:"var(--white-color)" }} />
        </div>
      </div>
    </div>
  )
}

export default FourSectionTwo
