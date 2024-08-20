import Footer from "./components/footer"
import Manager from "./components/Manager"
import Navbar from "./components/Navbar"
function App() {


  return (
    <>
    <Navbar/>
    <div className=" min-h-[87vh] bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
