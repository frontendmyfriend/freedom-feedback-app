import { BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from './components/AboutIcon';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';




function App() {

  return (
<FeedbackProvider>

  <BrowserRouter>
    <Header/>
    <div className="container">
      <Routes>
        
        <Route 
          path="/" 
          element={
            <div>
              <FeedbackForm />
              <FeedbackStats/>
              <FeedbackList />
            </div>
          } 
        />

       <Route path="/about" element={<AboutPage />} />
       <Route path="/post/*" element={<Post />} />


      </Routes>
      <AboutIcon/>
    </div>
    
  </BrowserRouter>
  </FeedbackProvider>
);
  
}

export default App;
