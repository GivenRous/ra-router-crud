import { Link } from "react-router-dom";

export default function PostListItem({ post }) {
  return (
    <Link className="post-link" to={"/posts/" + post.id}>
      <div className="post">
        <div className="row">
          <div className="avatar"></div>
          <div>
            <div className="name">Иванов Иван Иванович</div>
          </div>
        </div>
        <div className="content">{post.content}</div>
      </div>
    </Link>
  );
}
