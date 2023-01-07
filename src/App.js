import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Loading180Ring } from './assets/loading';
import './App.scss';
import './global.scss';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Sprint = lazy(() => import('./components/pages/Sprint'));
const Service = lazy(() => import('./components/pages/Service'));
const CaseStudy = lazy(() => import('./components/pages/CaseStudy'));
const Career = lazy(() => import('./components/pages/Career'));
const Contact = lazy(() => import('./components/pages/Contact'));

function App() {
    return (
        <Router>
            <Suspense
                fallback={
                    <div className="v-screen h-screen flex justify-center items-center">
                        <Loading180Ring width={48} height={48} fill="#ff006c" />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/sprint" element={<Sprint />} />
                    <Route path="/case-study" element={<CaseStudy />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
