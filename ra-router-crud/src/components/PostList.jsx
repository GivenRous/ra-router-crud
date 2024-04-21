import { useState, useEffect } from "react";
import PostListItem from "./PostListItem";

export default function PostList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7070/posts");
        if (!response.ok) {
          throw new Error("Error");
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        throw new Error("Error");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Посты</h1>
      <div className="posts-list">
        {data.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
