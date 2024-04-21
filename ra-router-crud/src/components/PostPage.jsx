import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function PostPage() {
  const { productId } = useParams();

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:7070/posts/" + productId
        );
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

  const postDelete = async () => {
    try {
      const response = await fetch("http://localhost:7070/posts/" + productId, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error");
      }

      navigate("/");
    } catch (e) {
      throw new Error("Error");
    }
  };

  return (
    <div>
      <h1>Страница поста ID {data.post?.id}</h1>
      <div className="post">
        <div className="row">
          <div className="avatar"></div>
          <div>
            <div className="name">Иванов Иван Иванович</div>
          </div>
        </div>
        <div className="content">{data.post?.content}</div>
      </div>
      <div className="post-page-buttons">
        <Link className="post-link" to={"/edit-post/" + data.post?.id}>
          Изменить
        </Link>
        <button onClick={postDelete} style={{ backgroundColor: "#d8504d" }}>
          Удалить
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
