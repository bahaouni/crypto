import Navbar from "./component/Navbar";
import Section from "./component/Section";
import Lakta from "./component/Lakta";
import Features from "./component/Features";
import Wa from "./component/Wa";
import Body from "./component/Body.js";
import FormComponent from "./component/FormComponent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Lakta />
      <Section />
      <Features />

      <Body />
      <FormComponent />

    </div>
  );
}

export default App;
