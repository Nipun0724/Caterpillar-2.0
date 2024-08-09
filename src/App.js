import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Questionnaire from "./components/Questionnaire/Questionnaire";

function App() {
  return (
    <div className="App">
      <div className="hero-background">
        <Navbar />
        <HeroSection />
        <Features />
        {/* <Products />
        <Slider /> */}
      </div>
      <Questionnaire />
      <Footer />
    </div>
  );
}

export default App;
