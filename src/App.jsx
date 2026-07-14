import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route ,Outlet} from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";
import ScrollToTop from './componets/ScrollToTop';
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solution from './pages/Solution';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Career from './pages/Career';
import Contactus from './pages/Contactus'
import Footer from './componets/Footer'
import Loader from "./componets/Loader"
import Admin from './pages/Admin';

function App() {
   const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

 

  const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  )
}

   useEffect(() => {
    AOS.refresh();
  }, []);
  
 useEffect(()=>{  
  AOS.init({
    duration:1000,
    once:true,
  });
  
 },[]);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
    
    <BrowserRouter>
    <ScrollToTop />
    
     
    <Routes>
     <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={< Services/>}/>
          <Route path="/solution" element={<Solution/>}/>
          <Route path="/industries" element={<Industries/>}/>
          <Route path="/caseStudies" element={<CaseStudies/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contactus />}/>
        </Route>


        <Route path="/admin" element={<Admin />} />
     

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
