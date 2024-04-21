import { Link } from "react-router-dom";

export default function AddPanel() {
  return (
    <div className="add-post">
      <div className="add-post-btn">
        <Link to="/posts/new">Создать пост</Link>
      </div>
    </div>
  );
}