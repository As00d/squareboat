import classes from "./JobsPostedPage.module.css";
import axios from "axios";
import { getToken } from "../utils/common";

const JobPostedPageCard = function (props) {
  const clickHandler = function (e, val) {
    const tokenToSend = JSON.parse(JSON.stringify(getToken()));
    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${val.job.id}/candidates`,
        {
          headers: {
            Authorization: `${tokenToSend}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        props.onApplicant(res);
      })
      .catch((err) => {
        console.log(err);
      });
    props.onModalOpen(true);
  };

  return (
    <>
      {Array.from(props.jobs).map((job) => {
        console.log(job);
        return (
          <div className={classes.postedJob} key={job.id}>
            <div className={classes.postedJobTitle}>{job.title}</div>
            <div className={classes.postedJobDesc}>{job.description}</div>
            <div className={classes.postedJobLocAndBtn}>
              <div className={classes.postedJobLoc}>{job.location}</div>
              <button
                onClick={(e) => clickHandler(e, { job })}
                className={classes.postedJobBtn}
              >
                View Application
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default JobPostedPageCard;
