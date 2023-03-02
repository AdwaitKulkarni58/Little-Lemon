import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Specials from "./components/Specials";

function App() {
  return (
    <>
      <div class="container">
        <Nav />
        <Main />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
