import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // edit feedbackItem
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
   fetchFeedback()
  }, []);
    
  // fetch feedback from server
  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
  
  // add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback',
        {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
        }
      )
    const data = await response.json()
      
    setFeedback([data, ...feedback]);
  };

  // delete feedback
  const deleteFeedback = async(id) => {
    if(window.confirm("ARe you sure you want to delete this?")) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }; 

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // update feedback Item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updItem)
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => item.id === id ? {...item, ...data} : item)
    )
  };


  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
        
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
