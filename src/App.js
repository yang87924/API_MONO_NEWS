import React, { useState, useEffect } from "react";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_MY_ENV_VARIABLE)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);
  return (
    <div className=" bg-yellow-600 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="  bg-white  mx-auto max-w-3xl">
        <ul role="list" className="divide-y divide-gray-500">
          {posts.map((post) => {
            return (
              <li className="px-4 py-4 sm:px-6">
                <h2 className="post-title">{post.title}</h2>
                <h2 className="text-right">{post.date}</h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
