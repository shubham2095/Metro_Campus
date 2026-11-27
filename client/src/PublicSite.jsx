import { Routes, Route } from 'react-router'
import ScrollToTop from './components/layout/ScrollToTop'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'

import Home from './pages/public/Home'
import About from './pages/public/About'
import Rooms from './pages/public/Rooms'
import Services from './pages/public/Services'
import Gallery from './pages/public/Gallery'
import Contact from './pages/public/Contact'
import NotFound from './pages/public/NotFound'

export default function PublicSite() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}