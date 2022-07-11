import classes from "./CandidateModal.module.css";

const CandidateModal = function (props) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalHeading}>
        Applicants for this job
        <img
          src="./Images/cross.png"
          alt="modalCross"
          onClick={() => {
            console.log("click");
            props.onModalClose(false);
          }}
        />
      </div>
      <hr style={{ marginLeft: "20px", marginRight: "20px" }}></hr>
      <div className={classes.modalApplicants}>
        <div className={classes.modalApplicantsTotal}>
          Total {Array.from(props.applicants).length} applications
        </div>
        <div className={classes.applicants}>
          {Array.from(props.applicants).map((applicant) => {
            return (
              <div className={classes.modalCard}>
                <div className={classes.modalCardPart1}>
                  <div className={classes.modalCardId}>
                    {applicant.name.at(0).toUpperCase()}
                  </div>
                  <div className={classes.modalCardEmailAndName}>
                    <span className={classes.modalCardUserName}>
                      {applicant.name}
                    </span>
                    <span className={classes.modalCardUserEmail}>
                      {applicant.email}
                    </span>
                  </div>
                </div>
                <div className={classes.modalCardPart2}>
                  <span className={classes.modalCardSkillTitle}>Skills</span>
                  <div className={classes.modalCardSkills}>
                    {applicant.skills}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CandidateModal;
