import React,{useState} from 'react'
import Home from './components/home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/home/compo/Navbar'
import About from './components/about/About'
import Footer from './components/home/compo/Footer'
import Service from './components/services/Service'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import ProjectDetails from './components/projects/compo/ProjectDetails'
import ProjDetails from './components/home/compo/ProjDetails'


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/*' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service/>} />
        <Route path='/project/*' element={<Project/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project/projectDetails' element={<ProjectDetails/>} />
        <Route path='/home/projdetails' element={<ProjDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App







// import React,{useState} from 'react'
// import Home from './components/home/Home'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Navbar from './components/home/compo/Navbar'
// import About from './components/about/About'
// import Footer from './components/home/compo/Footer'
// import Service from './components/services/Service'
// import Project from './components/projects/Project'
// import Contact from './components/contact/Contact'
// import ProjectDetails from './components/projects/compo/ProjectDetails'
// import ProjDetails from './components/home/compo/ProjDetails'
// import AdminDashboard from './admin/AdminDashboard'
// import AdminLogin from './admin/AdminLogin'

// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* Conditional rendering of Navbar */}
//       <Routes>
//         <Route path='/admin/*' element={<AdminRoutes />} />
//         <Route path='/' element={<UserRoutes />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const AdminRoutes = () => {
//   return (
//     <>
//       <Route path='/admin/login' element={<AdminLogin />} />
//       <Route path='/admin/dashboard' element={<AdminDashboard />} />
//       {/* Add more admin routes here */}
//     </>
//   );
// }

// const UserRoutes = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/about' element={<About />} />
//         <Route path='/service' element={<Service/>} />
//         <Route path='/project/*' element={<Project/>} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/project/projectDetails' element={<ProjectDetails/>} />
//         <Route path='/home/projdetails' element={<ProjDetails />}/>
//         {/* Add more user routes here */}
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;
