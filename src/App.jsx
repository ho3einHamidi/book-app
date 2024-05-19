import "./App.css";
import Books from "./Components/Books/Books";
import SearchBar from "./Components/SearchBar/SearchBar";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <Layout>
      <div className="app">
        <SearchBar />
        <Books />
      </div>
    </Layout>
  );
}

export default App;
