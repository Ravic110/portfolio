import MySkills from "@pages/MySkills";
import Certificat from "../Certificat/Certificat";
import Education from "./Education";
import Experience from "./Experience";
import Leadership from "./Leadership";


const CV = () => {
  return (
    <>
      <div className="bostami-page-content-wrap">
        {/* page title */}
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">mon cv</h2>
          </div>
        </div>
        <div className="section-wrapper pl-60 pr-60 mb-60">
          <div className="row">

            <Education/>

            <Experience/>

            <Certificat/>

            <Leadership/>

            <MySkills noPadding={true}/>

          </div>
        </div>
      </div>
    </>
  );
};

export default CV;
