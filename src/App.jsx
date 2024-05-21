import { useState } from "react";
import "./App.css";
import Books from "./Components/Books/Books";
import SearchBar from "./Components/SearchBar/SearchBar";
import { books } from "./Constants/mockData";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <Layout>
      <Books />
    </Layout>
  );
}

export default App;
