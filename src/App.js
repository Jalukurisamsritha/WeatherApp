// import logo from './logo.svg';
// import {Home} from './Components/Home';
// import {About_us} from './Components/About_us';
// import {Contact_us} from './Components/Contact_us';
// // import {Upload} from './Components/Upload';
// import {Routes,Route} from 'react-router-dom';

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//       <Route path='Contact_us' element={<Contact_us/>}/>
//       <Route path='About_us' element={<About_us/>}/>
//       {/* <Route path='Upload' element={<Upload/>}/> */}
//       {/* <Route path='Feedback'element={<Feedback/>}/> */}
//     </Routes>

//     </div>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Routes,Route} from 'react-router-dom'
import './App.css';
import {Navbar} from './Components/Navbar';
import { Contact_us} from './Components/Contact_us';
import {About_us} from './Components/About_us';
//import {Footer} from './components/Footer';
import {Home} from './Components/Home'
//import { Carousel as Home } from './Components/Home';
import {Forecast} from './Components/Forecast';
import {Detect} from './Components/Detect';
//import {Home} from './Components/Home3'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact_us/>}/>
      <Route path='About' element={<About_us/>}/>
      <Route path='Forecast' element={<Forecast/>}/>
      <Route path='Detect' element={<Detect/>}/>
      
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;