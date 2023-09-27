import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import './App.css';
import { useLayoutEffect } from "react";
import Home from './components/Home/Home';
import EducationAndCertification from './components/EducationAndCertification/EducationAndCertification';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Skills from './components/Skills/Skills.jsx';
import GithubRepo from './components/GithubRepo/GithubRepo';
import Projects from './components/Projects/Projects.jsx';
import Footer from "./components/Footer/Footer";
import SingleProject from "./components/Projects/SingleProject/SingleProject";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {

  return (
    <Router>
      <Wrapper>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/educationandcertification" element={<EducationAndCertification />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/githubrepo" element={<GithubRepo />} />
          <Route path="/singleproject/:index" element={<SingleProject />} />
        </Routes>
        <Footer />
      </div>
      </Wrapper>
    </Router>
  );
}

export default App;
