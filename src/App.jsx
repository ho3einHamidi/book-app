import "./App.css";
import BookCard from "./Components/Book/BookCard";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <Layout>
      <div className="app">
        <SearchBar />
        <BookCard />
      </div>
    </Layout>
  );
}

export default App;
