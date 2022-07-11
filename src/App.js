import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import LoginPage from "./Components/LoginPage";
import JobsPostedPage from "./Components/JobsPostedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/jobs" element={<JobsPostedPage></JobsPostedPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
