import React from "react";
import PostList from "./components/PostList";
import "./App.css";

const App = () => {
  const posts = [
    { id: 1, author: "John", content: "Hello, world!" },
    { id: 2, author: "Paul", content: "This is a post." },
    {
      id: 3,
      author: "Emma",
      content:
        "Just finished a great book! Highly recommend it.\n\nWhat's everyone else reading?",
    },
    {
      id: 4,
      author: "David",
      content: "Excited to start my new job next week!\n\nWish me luck!",
    },
    {
      id: 5,
      author: "Sarah",
      content:
        "Spent the day hiking in the mountains. Feeling tired but happy.\n\nNature is so beautiful!",
    },
    {
      id: 6,
      author: "Alex",
      content: "Just adopted a puppy!\n\nMeet our new family member, Luna.",
    },
    {
      id: 7,
      author: "Emily",
      content:
        "Cooked a delicious meal tonight.\n\nHere's the recipe if anyone wants to try it:",
    },
    {
      id: 8,
      author: "Mark",
      content: "Watching the sunset at the beach.\n\nLife is good.",
    },
    {
      id: 9,
      author: "Rachel",
      content: "Started learning a new language.\n\nIt's challenging but fun!",
    },
    {
      id: 10,
      author: "Mike",
      content: "Just finished a coding project.\n\nFeeling accomplished!",
    },
  ];

  return (
    <div className="app-container">
      <h1>My Feed</h1>
      {/* Include PostList as a child component */}
      {/* Pass the posts as prop to PostList */}
      <PostList posts={posts} />
    </div>
  );
};

export default App;
