import About from "./ui/personal-information/About";
import Contact from "./ui/personal-information/Contact";
import Projects from "./ui/personal-information/Projects";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App-personal-description">
                <About />
            </div>

            <div className="App-projects">
                <Projects />
            </div>

            <div className="App-contact">
                <Contact />
            </div>
        </div>
    );
}

export default App;
