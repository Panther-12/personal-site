/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import './App.css';
import Top_nav from './top_nav'
import Sections from './sections_wrapper'
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  return (
    <div className="App">
        <Top_nav/>
      <div className="container">
        <div className="row">
          <Sections/>
        </div>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
