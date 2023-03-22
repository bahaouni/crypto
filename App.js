import logo from './logo.svg';
import './App.css';

import React from 'react';
import News from './News/News';
import Footer from './Footer/Footer';
import Team from './Team/Team';
import Proc from './Proc/Proc';
import Revie from './Revie/Revie';
import Newf from './Newf/Newf';

function App() {
  return (
    <div>
      <News />
      <Proc />
      <Team />
      <Revie />
      <Footer />
      <Newf />
    </div>
  );
}

export default App;
