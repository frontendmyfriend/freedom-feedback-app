import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a text from context",
      rating: 2,
    },
     {
      id: 2,
      text: "This is a text from context",
      rating: 4,
    },
     {
      id: 3,
      text: "This is a text from context",
      rating: 9,
    },
  ]);


// add feedback
    const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

// delete feedback
    const deleteFeedback = (id) => {
    if (window.confirm("ARe you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item:item,
      edit: true
    })
  }
  
// edit feedbackItem
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // update feedback Item
  const updateFeedback = (id, updItem) =>{
    console.log('updated')
  }


  return (
    <FeedbackContext.Provider value={{ feedback: feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
