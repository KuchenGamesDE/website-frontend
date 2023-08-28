import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

import Home from './routes/Home';
import Team from './routes/Team';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <>
            <BrowserRouter className="min-h-[100vh]">
                <Background />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect 404 to Homepage */}
                </Routes>
                <Footer />
                <ScrollToTop />
            </BrowserRouter>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
