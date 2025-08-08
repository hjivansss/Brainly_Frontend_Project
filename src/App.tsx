
import './App.css'
import { Dashboard } from './pages/dashboard';
import { Signup } from './pages/Signup';
import { Signin } from  './pages/Signin';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ReadOnlyBrainView} from "./pages/ReadOnlyBrainView"
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';


function App() {

  return <BrowserRouter>
           <Routes>
                  <Route path="/" element={<Signup/>}/>
                  <Route path="/signin" element={<Signin/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/share/:sharelink" element ={<ReadOnlyBrainView/>} />
                  <Route path="/about" element={<AboutPage/>} />
                  <Route path="/faqs" element={<FAQPage/>}/>

           </Routes>
         </BrowserRouter>
   
  

}

export default App;
