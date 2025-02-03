import React from "react";
import PostList from "./components/Post";

function App() {
  return (
    <div className="App">
      <PostList post={{
              title: "",
              date: "",
              imageUrl: "",
              authorAvatarUrl: "",
              authorName: "",
              content: {
                rendered: "",
              },
          }} />
    </div>
  );
}

export default App;
