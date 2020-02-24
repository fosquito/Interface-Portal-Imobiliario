import React from 'react';
import Navbar1 from './Component/Navbar/Navbar1';
import Footer1 from './Component/Footer/Footer1';
import SearchForm from './Component/SearchForm/SearchForm';

function App() {
  return (
    <React.Fragment>
      <Navbar1 />

      <SearchForm />

      <Footer1 />
    </React.Fragment>
  )
}

export default App;
