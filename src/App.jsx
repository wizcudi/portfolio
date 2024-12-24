import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard  from './components/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home.jsx';
import BlogList from './components/blog/BlogList';
import BlogPost  from './components/blog/BlogPost';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className="flex flex-col bg-color60">
        <Navbar />
        <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
