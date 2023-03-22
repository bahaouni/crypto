import Navbar from "./component/Navbar";
import Section from "./component/Section";
import Lakta from "./component/Lakta";
import Features from "./component/Features";
import Wa from "./component/Wa";
import Body from "./component/Body.js";
import FormComponent from "./component/FormComponent";
import SignupForm from "./component/SignupForm";


import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom';
import { Nav } from "reactstrap";
import Proc from "./component/Proc";
import Team from "./component/Team";
import Revie from "./component/Revie";
import News from "./component/News";
import Footer from "./component/Footer";
import Newf from "./component/Newf";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Lakta />
      <Features />
      <Proc />
      <Section />

      <Team />
      <Body /><FormComponent />
      <Revie />
      <News />
      <SignupForm />
      <Newf />
      <Footer />




    </BrowserRouter>
  );
}

export default App;
