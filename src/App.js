import './App.css';
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programs/Program"
import Reasons from "./components/Reasons/Reasons"
import Plans from "./components/Plans/Plans"
import Testamonials from "./components/Testamonials/Testamonials"
// import Join from "./components/Join/Join"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs></Programs>
          <Reasons/>
          <Plans/>
          <Testamonials/>
          {/* <Join/> */}
          <Footer/>
    </div>
  );
}

export default App;
