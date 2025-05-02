import { useState } from "react";

import LikeButton from "./LikeButton";
import CommentList from "./CommentList";

const Post = ({ id, author, content }) => {
  // Add state for likes and comments
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  return (
    <div id={id} className="post">
      {/* Display the author in a <h2> */}
      {/* Display the content in a <p> */}
      {/* Include LikeButton as child component */}
      {/* Pass the likes and setLikes as props to LikeButton */}
      {/* Include CommentList as child component */}
      {/* Pass the comments and setComments as props to CommentList */}
      <h2>{author}</h2>
      <p>{content}</p>
      <LikeButton likes={likes} setLikes={setLikes} />
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
};

export default Post;
