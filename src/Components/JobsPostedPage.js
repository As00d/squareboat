import classes from "./JobsPostedPage.module.css";
import axios from "axios";
import { getToken } from "../utils/common";
import { useState, useEffect } from "react";
import JobPostedPageCard from "./JobPostedPageCard";
import CandidateModalOverlay from "./CandidateModalOverlay";
import CandidateModal from "./CandidateModal";
import { getUser } from "../utils/common";
import { useNavigate } from "react-router-dom";

const JobsPostedPage = function () {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState("");
  const [applicants, setApplicants] = useState("");
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    const tokenToSend = JSON.parse(JSON.stringify(getToken()));
    console.log(tokenToSend);
    axios
      .get("https://jobs-api.squareboat.info/api/v1/recruiters/jobs", {
        headers: {
          Authorization: `${tokenToSend}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (jobs.length === 0) {
          setJobs(res.data.data.data);
          console.log(res.data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applicantSearch = function (applicants) {
    console.log(applicants.data.data);
    setApplicants(Array.from(applicants.data.data));
  };

  const modalDisplay = function (val) {
    console.log(val);
    setModalShow(val);
  };

  let user = getUser();

  return (
    <div className={classes.jobsPostedPage}>
      <div className={classes.jpPart1}>
        <div className={classes.jpNav}>
          <div className={classes.jpNavDisp}>
            <img src="./Images/MyJobs.png" alt="Logo of the app" />
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <snap className={classes.userId}>{user.at(0)} </snap>
              <img src="./Images/down.png" alt="" />
            </div>
          </div>
        </div>
        <hr style={{ marginLeft: "50px", marginRight: "50px" }}></hr>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={classes.homeNav}>
            <img
              src="./Images/home.png"
              alt=""
              onclick={() => {
                console.log("click");
                navigate("/");
              }}
            />
            Home
          </span>
          <span className={classes.mainHeading}>Jobs posted by you</span>
        </div>
      </div>
      <div className={classes.jpPart2}>
        <div className={classes.jpPart2_2}>
          <JobPostedPageCard
            jobs={jobs}
            onApplicant={applicantSearch}
            onModalOpen={modalDisplay}
          ></JobPostedPageCard>
        </div>
        {modalShow && (
          <CandidateModal
            applicants={applicants}
            onModalClose={modalDisplay}
          ></CandidateModal>
        )}
        {modalShow && <CandidateModalOverlay></CandidateModalOverlay>}
      </div>
    </div>
  );
};
export default JobsPostedPage;
