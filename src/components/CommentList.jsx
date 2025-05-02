const CommentList = () => {
  // Complete the handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString("en-US");

    const id = comments.length + 1;
    const author = "Anonymous";
    const content = event.target.content.value;
    const time = `${dateString} ${timeString}`;

    if (!content) {
      return;
    }

    // Create a new comment object with the id, author, content, and time
    // ...

    // Update the comments state by adding the new comment to the beginning of the array
    // ...

    event.target.reset();
  };

  return (
    <div className="comment-list">
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea name="content" placeholder="Add a comment" />
        <button type="submit">Comment</button>
      </form>
      <ul className="comments">
        {/* Map over the list of comments and render a <li> element for each comment */}
        {/* Inside the <li> element display the author, content and time */}
        {/* Display the author in a <h4> */}
        {/* Display the content in a <p> */}
        {/* Display the time in a <p> with class "time" */}
      </ul>
    </div>
  );
};

export default CommentList;
