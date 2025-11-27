import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from './components/AboutIcon';
import Post from './components/Post';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("ARe you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
  <BrowserRouter>
    <Header/>
    <div className="container">
      <Routes>
        
        <Route 
          path="/" 
          element={
            <div>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
          } 
        />

       <Route path="/about" element={<AboutPage />} />
       <Route path="/post/*" element={<Post />} />


      </Routes>
      <AboutIcon/>
    </div>
    
  </BrowserRouter>
);
  
}

export default App;
