import banner from "../../assets/images/banner2.png";
import FourSectionTwo from "./FourSectionTwo";
const FourSection = () => {
  return (
    <div>
      <div style={{   width:"100%"}}>
        <div>
          <img src={banner} alt="banner "  style={{width:"100%"}}/>
        </div>
      </div>
      <div>
        <FourSectionTwo />
      </div>
    </div>
  );
};

export default FourSection;
