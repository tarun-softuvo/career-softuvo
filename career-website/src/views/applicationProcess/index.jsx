import React from "react";
import { Link } from "react-router-dom";
import applyIconImg from "../../assets/images/apply-icon.svg";
import screeningImg from "../../assets/images/screening-icon.svg";
import assessmentImg from "../../assets/images/assessment-icon.svg";
import interviewImg from "../../assets/images/interview-icon.svg";
import decisionImg from "../../assets/images/decision-icon.svg";
function ApplicationProcess() {
  return (
    <div>
      <section className="applicationProcessSection applicationProcessSection--bgBlue commonPY">
        <div className="container-lg">
          <div className="sectionContent text-center">
            <h2>Application Process</h2>
          </div>
          <div className="stepsOuter">
            <div className="stepsInner">
              <img src={applyIconImg} alt="Apply Form" />
              <h4>Apply</h4>
              <img
                src="images/step-arrow.svg"
                alt=""
                className="stepsInner__steparrow"
              />
            </div>
            <div className="stepsInner">
              <img src={screeningImg} alt="Screening" />
              <h4>Screening</h4>
              <img
                src="images/step-arrow.svg"
                alt=""
                className="stepsInner__steparrow"
              />
            </div>
            <div className="stepsInner">
              <img src={assessmentImg} alt="Assessment" />
              <h4>Online Assessment</h4>
              <img
                src="images/step-arrow.svg"
                alt=""
                className="stepsInner__steparrow"
              />
            </div>
            <div className="stepsInner">
              <img src={interviewImg} alt="Interview" />
              <h4>Interview</h4>
              <img
                src="images/step-arrow.svg"
                alt=""
                className="stepsInner__steparrow"
              />
            </div>
            <div className="stepsInner">
              <img src={decisionImg} alt="Decision" />
              <h4>Decision/Offer</h4>
            </div>
          </div>
          <div className>
            <Link
              to="/application-process"
              className="commonButton commonButton--yellow mx-auto"
            >
              Learn More About Our Application Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ApplicationProcess;
