import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import MainHeader from "./components/MainHeader";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="bg-black min-h-screen w-screen">

<Routes>
  <Route path="/" element={<MainHeader />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="courses" element={<Courses />} />
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="*" element={ <div className="flex items-center justify-center "><div className="text-2xl sm:text-4xl md:text-8xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-center py-4">Page Not Found</div></div>}/>
  </Route>
</Routes>

    </div>
  );
}

export default App;
