import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import { getPosts } from "../../service/posts.service";
import "./Posts.css";

const Posts = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        setData(posts);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(`${err}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <div className="cards_container">
          {!isLoading ? (
            data.length > 0 &&
            data.map((post: any) => <PostCard key={post?.id} post={post} />)
          ) : (
            <h2>Loading ...</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
