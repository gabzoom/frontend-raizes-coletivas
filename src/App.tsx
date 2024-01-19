import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./assets/components/navbar/Navbar"
import Footer from "./assets/components/footer/Footer"

function App() {
    return (
        <>
            <BrowserRouter >
                <Navbar /> 
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App