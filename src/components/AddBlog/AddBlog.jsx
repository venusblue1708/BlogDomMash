import React from "react";
import "./AddBlog.css";
const AddBlog = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "70px",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#3d405b" }}>Add Breakfast</h2>
      <input type="text" placeholder="title" />
      <input type="url" placeholder="image-url" />
      <input type="number" placeholder="fullness" />
      <input type="text" placeholder="category" />
    </div>
  );
};

export default AddBlog;
