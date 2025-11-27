import React from "react";
import { Navigate, useParams, useNavigate, Routes, Route} from "react-router-dom";

function Post() {
  const params = useParams();

  const status = 200;

  const onClick = () => {
    navigate("/about");
  };

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to={"/notfound"} />;
  }

  return (
    <div>
      <h1> Post {params.id}</h1>
      <button onClick={onClick}>Click me</button>

      <Routes>
        <Route path='/show' element={<h1>Hello from post/show</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
