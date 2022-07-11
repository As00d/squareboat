import classes from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

const Homepage = function () {
  const navigate = useNavigate();
  return (
    <div className={classes.homepage}>
      <div className={classes.hpPart1}>
        <div className={classes.hpNav}>
          <div className={classes.hpNavDisp}>
            <img src="./Images/MyJobs.png" alt="Logo of the app" />
            <button
              className={classes.loginBtn}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login/Signup
            </button>
          </div>
        </div>
        <hr style={{ marginLeft: "50px", marginRight: "50px" }}></hr>
        <div className={classes.hpDisp1}>
          <div className={classes.hpDisp1_1}>
            <div className={classes.mainTitle}>
              Welcome to <br></br>My
              <span style={{ color: "#43afff" }}>Jobs</span>
            </div>
            <button
              className={classes.getStartedBtn}
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </button>
          </div>
          <div className={classes.hpDisp1_2}>
            <img
              src="./Images/mainImage.png"
              alt="main Image of the page"
              className={classes.mainImage}
            />
          </div>
        </div>
      </div>
      <div className={classes.hpPart2}>
        <div className={classes.hpDisp2}>
          <div className={classes.hpDisp2_1}>
            <div className={classes.hpDisp2_11}>Why Us</div>
            <div className={classes.hpDisp2_12}>
              <div className={classes.homepageCard}>
                <div className={classes.homepageCardTitle}>
                  Get More <br /> Visibility
                </div>
                <div className={classes.homepageCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </div>
              </div>
              <div className={classes.homepageCard}>
                <div className={classes.homepageCardTitle}>
                  Organize Your <br /> Candidates
                </div>
                <div className={classes.homepageCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className={classes.homepageCard}>
                <div className={classes.homepageCardTitle}>
                  Verify Their <br /> Abilities
                </div>
                <div className={classes.homepageCardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>
          </div>
          <div className={classes.hpDisp3_2}>
            <div className={classes.hpDisp3_11}>Companies Who Trust Us</div>
            <div className={classes.hpDisp3_12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBottom: "20px",
                }}
              >
                <img src="./Images/solaytic.png" alt="" />
                <img src="./Images/Kanba.png" alt="" />
                <img src="./Images/lighting.png" alt="" />
                <img src="./Images/ztos.png" alt="" />
                <img src="./Images/Kanba.png" alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  paddingBottom: "20px",
                }}
              >
                <img src="./Images/goldline.png" alt="" />
                <img src="./Images/ideaa.png" alt="" />
                <img src="./Images/liva.png" alt="" />
                <img src="./Images/velocity-9.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
