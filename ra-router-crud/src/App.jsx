import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPanel from "./components/AddPanel";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import PostPage from "./components/PostPage";
import EditPostPage from "./components/EditPostPage";

function App() {
  return (
    <div className="wrapper">
      <AddPanel />
      <div className="page">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:productId" element={<PostPage />} />
          <Route path="/edit-post/:productId" element={<EditPostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
