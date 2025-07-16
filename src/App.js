import './App.css';
import './Sections.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="content">
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
