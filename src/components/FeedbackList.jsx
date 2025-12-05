
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from "./shared/Spinner";

function FeedbackList() {

  const {feedback, isLoading} = useContext(FeedbackContext)
  
  if ((!feedback || feedback.length === 0) && !isLoading) {
    return <p>There is no feedback yet</p>;
  }

  return isLoading ? <Spinner /> :
    (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
