import Layout from "./Components/Layout";
import About from "./Components/About";
import Education from "./Educations/Education"
import Techstack from "./Components/Techstack";
import Project from "./Projects/Project";
import WorkExp from "./WorkExp/WorkExp";
import Contact from "./Contact/Contact";


function App() {
  return (
    <div className="App">
      <Layout/>
      <About/>
      <Education/>
      <Techstack/>
      <Project/>
      <WorkExp />
      <Contact/>
      <div className="footer pb-3 ms-3">
            <h4 className="text-center">all copyrights are reserved By Saurabh Bhosale &copy; 2024</h4>
        </div>

       
    </div>
  );
}

export default App;
