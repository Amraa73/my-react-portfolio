import './App.css';
import Contact from './pages/Contact.js';
import Footer from './pages/Footer.js';
import Header from "./pages/Header.js"
import Main from "./pages/Main.js"
import Skills from './pages/Skill.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
