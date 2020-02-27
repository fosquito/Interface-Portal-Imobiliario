import React from 'react';
import Navbar1 from './Component/Navbar/Navbar1';
import Footer1 from './Component/Footer/Footer1';
import Header from './Component/Header/Header';
import Feedback from './Component/Feedback/Feedback';
import WhyUs from './Component/WhyUs/WhyUs';

function App() {
  return (
    <React.Fragment>
      <Navbar1 />

      <Header />

      <WhyUs />

      <Feedback />

      <Footer1 />
    </React.Fragment>
  )
}

export default App;
