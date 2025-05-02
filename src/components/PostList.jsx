import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <ul className="post-list">
      {/* Map over the list of posts and render a Post component for each post */}
      {/* Pass the post data (id, author, content) as props to the Post component */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
        />
      ))}
    </ul>
  );
};

export default PostList;
