import classes from "./Loginpage.module.css";
import { useState } from "react";
import axios from "axios";
import { setUserSession } from "../utils/common";
import { useNavigate } from "react-router-dom";

const LoginPage = function (props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const formSubmitHandler = function (e) {
    e.preventDefault();
    console.log(userEmail, userPassword);
    axios
      .post("https://jobs-api.squareboat.info/api/v1/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        setUserSession(res.data.data.token, res.data.data.name);
        navigate("/jobs");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={classes.loginpage}>
      <div className={classes.lpPart1}>
        <div className={classes.lpNav}>
          <div className={classes.lpNavDisp}>
            <img src="./Images/MyJobs.png" alt="Logo of the app" />
          </div>
        </div>
        <hr style={{ marginLeft: "50px", marginRight: "50px" }}></hr>
      </div>
      <div className={classes.lpPart2}>
        <form className={classes.lpForm} onSubmit={formSubmitHandler}>
          <div className={classes.lpFormPart1}>
            <span className={classes.lpFormHeading}>Login</span>
          </div>
          <div className={classes.lpFormPart2}>
            <label htmlFor="userEmail">Email address</label>
            <br></br>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              style={{ paddingLeft: "5px;" }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <br></br>
            <label htmlFor="userPassword">Password</label>
            <br></br>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="Enter your password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className={classes.lpFormPart3}>
            <button className={classes.loginBtn}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
