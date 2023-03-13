import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog/AddBlog";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Select from "./components/Select/Select";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
