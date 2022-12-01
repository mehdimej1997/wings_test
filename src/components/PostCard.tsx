const PostCard = ({ post }: any) => {
  return (
    <div className="card_container">
      <h2 className="card_title">{post?.title}</h2>
      <p className="card_description">{post?.body}</p>
    </div>
  );
};

export default PostCard;
