import { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({ title: "", body: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.title !== null && data.body !== null) {
      try {
        await axios.post("http://localhost:5000", {
          title: data.title,
          body: data.body,
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Blog Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          placeholder="Enter Blog Content"
          onChange={(e) => setData({ ...data, body: e.target.value })}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default App;
